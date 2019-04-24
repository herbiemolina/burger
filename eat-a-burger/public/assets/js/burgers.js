$(function() {
  $(".change-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newburger = $(this).data("newburger");

    var newburgerState = {
      devour: newburger
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newburgerState
    }).then(
      function() {
        console.log("changed burger to", newburger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("creating burger")
    var newburger = {
      burger_name: $("#ca").val().trim(),
      
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

 
});
