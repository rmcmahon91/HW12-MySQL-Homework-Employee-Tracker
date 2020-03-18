var inquirer = require("inquirer")
var mysql = require("mysql")
require("console.table")
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "NYR@ngers91",
    database: "employeeDB"
})

connection.connect(function (err) {
    if (err) throw err
    console.log("connect as id" + connection.threadId);
    displayMenu()
});

function displayMenu() {
    inquirer.prompt([
        {
            name: "Employee",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Employee By Department", "View All Employee By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager"]
        }
    ]).then(function (userInput) {

        switch (userInput.Employee) {
            case "View All Employees":
                viewEmployee()
                break
            case "View All Employee By Department":
                viewByDepartment()
                break
            case "View All Employee By Manager":
                viewByManager()
                break
            case "Add Employee":
                addEmployee()
                break
            case "Remove Employee":
                removeEmployee()
                break
            case "Update Employee Role":
                updateEmployeeRole()
                break
            case "Update Employee Manager":
                updateEmployeeManager()
                break





        }



    })
}

function viewEmployee() {
    connection.query(`
       
    SELECT employee.id,employee.first_name,employee.last_name, role.title,role.salary, department.name department,
      concat( employee2.first_name," ",employee2.last_name) manager 
     FROM employee
     left join role on employee.role_id = role.id
    left join department on department.id = role.department_id
    left join employee employee2 on employee.id = employee2.manager_id ;
    ;
        `, function (err, data) {
        console.table(data)
        displayMenu()
    })
}

function viewByDepartment() {
    connection.query(`
       
    SELECT employee.id,employee.first_name,employee.last_name, role.title,role.salary, department.name department,
      concat( employee2.first_name," ",employee2.last_name) manager 
     FROM employee
     left join role on employee.role_id = role.id
    left join department on department.id = role.department_id
    left join employee employee2 on employee.id = employee2.manager_id ;
    ;
        `, function (err, data) {
        console.table(data)
        displayMenu()
    })

}
function viewByManager() {
    connection.query(`
       
    SELECT employee.id,employee.first_name,employee.last_name, role.title,role.salary, department.name department,
      concat( employee2.first_name," ",employee2.last_name) manager 
     FROM employee
     left join role on employee.role_id = role.id
    left join department on department.id = role.department_id
    left join employee employee2 on employee.id = employee2.manager_id ;
    ;
        `, function (err, data) {
        console.table(data)
        displayMenu()
    })
}

function addEmployee() {
    connection.query(`
       
    SELECT employee.id,employee.first_name,employee.last_name, role.title,role.salary, department.name department,
      concat( employee2.first_name," ",employee2.last_name) manager 
     FROM employee
     left join role on employee.role_id = role.id
    left join department on department.id = role.department_id
    left join employee employee2 on employee.id = employee2.manager_id ;
    ;
        `, function (err, data) {
        console.table(data)
        displayMenu()
    })
}

function removeEmployee() {
    connection.query(`
       
    SELECT employee.id,employee.first_name,employee.last_name, role.title,role.salary, department.name department,
      concat( employee2.first_name," ",employee2.last_name) manager 
     FROM employee
     left join role on employee.role_id = role.id
    left join department on department.id = role.department_id
    left join employee employee2 on employee.id = employee2.manager_id ;
    ;
        `, function (err, data) {
        console.table(data)
        displayMenu()
    })
}

function updateEmployeeRole() {
    connection.query(`
       
    SELECT employee.id,employee.first_name,employee.last_name, role.title,role.salary, department.name department,
      concat( employee2.first_name," ",employee2.last_name) manager 
     FROM employee
     left join role on employee.role_id = role.id
    left join department on department.id = role.department_id
    left join employee employee2 on employee.id = employee2.manager_id ;
    ;
        `, function (err, data) {
        console.table(data)
        displayMenu()
    })
}

function updateEmployeeManager() {
    connection.query(`
       
    SELECT employee.id,employee.first_name,employee.last_name, role.title,role.salary, department.name department,
      concat( employee2.first_name," ",employee2.last_name) manager 
     FROM employee
     left join role on employee.role_id = role.id
    left join department on department.id = role.department_id
    left join employee employee2 on employee.id = employee2.manager_id ;
    ;
        `, function (err, data) {
        console.table(data)
        displayMenu()
    })
}