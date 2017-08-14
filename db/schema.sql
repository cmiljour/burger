CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers_db.tables
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured boolean,
    dateof timestamp,
	PRIMARY KEY (id)
);

