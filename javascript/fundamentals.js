// DAY 5 - JavaScript Fundamentals

// ------------------------------------
// 1. let and const
// ------------------------------------

let employeeName = "Aditi";
employeeName = "Priya";

const company = "PugArch";

console.log("Employee:", employeeName);
console.log("Company:", company);


// ------------------------------------
// 2. Data Types
// ------------------------------------

let name = "Rahul";             // String
let age = 22;                   // Number
let salary = 50000;             // Number
let isEmployee = true;          // Boolean
let address;                    // Undefined
let phone = null;               // Null

console.log(name);
console.log(age);
console.log(salary);
console.log(isEmployee);
console.log(address);
console.log(phone);


// ------------------------------------
// 3. Function
// ------------------------------------

function calculateSalary(salary, bonus) {
    return salary + bonus;
}

console.log(calculateSalary(50000, 5000));


// ------------------------------------
// 4. Arrow Function
// ------------------------------------

const add = (a, b) => {
    return a + b;
};

console.log("Addition:", add(10, 20));


// Short arrow function

const multiply = (a, b) => a * b;

console.log("Multiplication:", multiply(5, 4));


// ------------------------------------
// 5. Arrays
// ------------------------------------

const employees = [
    "Aditi",
    "Rahul",
    "Priya",
    "Kartik"
];

console.log("Employees:", employees);
console.log("First employee:", employees[0]);


// ------------------------------------
// 6. Objects
// ------------------------------------

const employee = {
    id: 1,
    name: "Aditi",
    salary: 50000,
    department: "IT"
};

console.log("Employee:", employee);
console.log("Name:", employee.name);
console.log("Salary:", employee.salary);


// ------------------------------------
// 7. Destructuring
// ------------------------------------

const {
    id,
    name: employeeFullName,
    salary: employeeSalary
} = employee;

console.log(id);
console.log(employeeFullName);
console.log(employeeSalary);


// Array destructuring

const departments = ["IT", "HR", "Finance"];

const [first, second, third] = departments;

console.log(first);
console.log(second);
console.log(third);


// ------------------------------------
// 8. Spread Operator
// ------------------------------------

const oldEmployees = ["Aditi", "Rahul"];

const newEmployees = [
    ...oldEmployees,
    "Priya",
    "Kartik"
];

console.log(newEmployees);


// Object spread

const updatedEmployee = {
    ...employee,
    salary: 60000
};

console.log(updatedEmployee);


// ------------------------------------
// 9. Rest Operator
// ------------------------------------

function calculateTotal(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(calculateTotal(10, 20, 30, 40));


// ------------------------------------
// 10. Template Literals
// ------------------------------------

const employeeInfo = `
Employee Name: ${employee.name}
Department: ${employee.department}
Salary: ${employee.salary}
`;

console.log(employeeInfo);
