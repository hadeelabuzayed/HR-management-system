'use strict';

const allEmployees = [];
function Employee(id, name, department, level, image, salary) {
    this.ID = id;
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = salary;
    allEmployees.push(this);
}

Employee.prototype.renderEmployeesInformation = function () {


    let cardContainer = document.createElement('section');
    let empPhoto = document.createElement('img');
    let empName = document.createElement('h4');
    let empDepartment = document.createElement('h4');
    let empSalary = document.createElement('h4');
    let empLevel = document.createElement('h4');

    cardContainer.style.backgroundColor = 'rgb(204, 216, 255)';
    cardContainer.style.borderRadius = '25px';
    cardContainer.style.width = '220px';
    cardContainer.style.height = '320px';
    cardContainer.style.padding = '30px';
    empPhoto.src = this.image;
    empPhoto.style.width = '150px';
    empPhoto.style.height = '150px';
    empName.textContent = `Employee Name: ${this.name}`;
    empDepartment.textContent = `Department: ${this.department}`;
    empLevel.textContent = `Level: ${this.level}`;
    empSalary.textContent = `Employee Salary: ${this.salary}`;
    cardContainer.appendChild(empPhoto);
    cardContainer.appendChild(empName);
    cardContainer.appendChild(empDepartment);
    cardContainer.appendChild(empSalary);
    mainBodyElement.appendChild(cardContainer);
}

let emp1 = new Employee(getEmployeeID(), 'Ghazi Samer', 'Administration', 'Senior', 'assets/Ghazi.png');
emp1.salary = calculateEmployeeSalary(emp1.level);
let emp2 = new Employee(getEmployeeID(), 'Lana Ali', 'Finance', 'Senior', 'assets/Lana.png');
emp2.salary = calculateEmployeeSalary(emp2.level);
let emp3 = new Employee(getEmployeeID(), 'Tamara Ayoub', 'Marketing', 'Senior', 'assets/Tamara.png');
emp3.salary = calculateEmployeeSalary(emp3.level);
let emp4 = new Employee(getEmployeeID(), 'Safi Walid', 'Administration', 'Mid-Senior', 'assets/Safi.png');
emp4.salary = calculateEmployeeSalary(emp4.level);
let emp5 = new Employee(getEmployeeID(), 'Omar Zaid', 'Development', 'Senior', 'assets/Omar.png');
emp5.salary = calculateEmployeeSalary(emp5.level);
let emp6 = new Employee(getEmployeeID(), 'Rana Saleh', 'Development', 'Junior', 'assets/Rana.png');
emp6.salary = calculateEmployeeSalary(emp6.level);
let emp7 = new Employee(getEmployeeID(), 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'assets/Hadi.png');
emp7.salary = calculateEmployeeSalary(emp7.level);

function getEmployeeID() {

    let x = Math.ceil(Math.random() * (9999 - 1000)) + 1000;
    console.log(`id = ${x}`);

    return Math.ceil(Math.random() * (9999 - 1000)) + 1000;
}

function calculateEmployeeSalary(employeeLevel) {
    let salary = 0;
    let netSalary = 0;
    switch (employeeLevel) {
        case "Senior":
            salary = Math.ceil(Math.random() * (2000 - 1500)) + 1500;


            console.log(salary);
            break;
        case "Mid-Senior":
            salary = Math.ceil(Math.random() * (1500 - 1000)) + 1000;

            // for testing
            console.log(salary);
            break;
        case "Junior":
            salary = Math.ceil(Math.random() * (1000 - 500)) + 500;


            console.log(salary);
            break;
        default:
            console.log("Invalid level");
    }
    netSalary = salary - (salary * 7.5 / 100);
    return netSalary;
}

console.log(allEmployees);

let mainBodyElement = document.getElementsByClassName('main_body')[0];
console.log(mainBodyElement);
mainBodyElement.style.display = 'flex';
mainBodyElement.style.flexWrap = 'wrap';
mainBodyElement.style.gap = '10px';

for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].renderEmployeesInformation();
}