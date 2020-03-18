DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
    
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

INSERT INTO department(name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role(title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);

INSERT INTO role(title, salary, department_id)
VALUES ("Salesperson", 80000, 1);

INSERT INTO role(title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);

INSERT INTO role(title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);

INSERT INTO role(title, salary, department_id)
VALUES ("Accountant", 100000, 3);

INSERT INTO role(title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO role(title, salary, department_id)
VALUES ("Lawyer", 100000, 4);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("Loki", "Laufeyson", 1);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("Thor", "Odinson", 2);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("Hercules", "Herakles", 3);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("Ares", "God of War", 4);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("Peter", "Parker", 5);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("Bruce", "Wayne", 6);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("Robin", "Boy Wonder", 7);