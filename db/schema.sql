DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers ( 
  id Int AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR( 255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  

  PRIMARY KEY ( `id` ) 
);
