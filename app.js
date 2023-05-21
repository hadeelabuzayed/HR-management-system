"use strict";
let emp1 = {
    employeeID: genID(),
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior"
};
emp1.Salary=getNetSalary(emp1.level)

let emp2 = {
    employeeID: genID(),
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior"
};
emp2.Salary = getNetSalary(emp2.level)

let emp3 = {
    employeeID: genID(),
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior"
};
emp3.Salary = getNetSalary(emp3.level)

let emp4 = {
    employeeID: genID(),
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior"
};
emp4.Salary = getNetSalary(emp4.level)

let emp5 = {
    employeeID: genID(),
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior"
};
emp5.Salary = getNetSalary(emp5.level)

let emp6 = {
    employeeID: genID(),
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior"
};
emp6.Salary = getNetSalary(emp6.level)

let emp7 = {
    employeeID: genID(),
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior"
};
emp7.Salary = getNetSalary(emp7.level)
function genID() {
    return Math.floor(Math.random() * 9000) + 1000;
}


let randomNumber = genID();

console.log(emp1.employeeID);
document.write()
function getNetSalary(level) { 
    let salary;
    if (level === 'Senior')
    { 
        salary =Math.floor(Math.random() * (2000 - 1500)) + 1500;
    }
else if
        (level === 'Mid-Senior') {
            salary = Math.floor(Math.random() * (1500 - 1000)) + 1000;
        }
    else if
        (level === 'Junior') {
        salary = Math.floor(Math.random() * (1000 - 500)) + 500;
    }
    let NetSalary = salary - (salary * 7.5 / 100);
    return NetSalary;
}
console.log(getNetSalary("Senior"));

function renderEmployees() {
    let employeeInfo = document.getElementById("employeeInfo");
    employeeInfo.innerHTML = `
    <p> Employee name:${emp1.fullName}<br>
Employee salary: ${emp1.Salary}
    </p>
    <p> Employee name:${emp2.fullName}<br>
Employee salary: ${emp2.Salary}
    </p>
    <p> Employee name:${emp3.fullName}<br>
Employee salary: ${emp3.Salary}
    </p>
    <p> Employee name:${emp4.fullName}<br>
Employee salary: ${emp4.Salary}
    </p>
    <p> Employee name:${emp5.fullName}<br>
Employee salary: ${emp5.Salary}
    </p>
    <p> Employee name:${emp6.fullName}<br>
Employee salary: ${emp6.Salary}
    </p>
<p> Employee name:${emp7.fullName}<br>
Employee salary: ${emp7.Salary}
    </p>

    `

}
