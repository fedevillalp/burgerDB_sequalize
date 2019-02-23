DROP DATABASE IF EXISTS burgers_DB;

CREATE database burgers_DB;

USE burgers_DB;

# DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  consumed BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

