// DAY 5 - Array Methods

const employees = [
    {
        id: 1,
        name: "Aditi",
        salary: 50000,
        department: "IT"
    },
    {
        id: 2,
        name: "Rahul",
        salary: 60000,
        department: "HR"
    },
    {
        id: 3,
        name: "Priya",
        salary: 45000,
        department: "Finance"
    },
    {
        id: 4,
        name: "Kartik",
        salary: 70000,
        department: "IT"
    }
];


// ------------------------------------
// 1. map()
// ------------------------------------

const names = employees.map(employee => employee.name);

console.log("Names:", names);


// ------------------------------------
// 2. filter()
// ------------------------------------

const itEmployees = employees.filter(
    employee => employee.department === "IT"
);

console.log("IT Employees:", itEmployees);


// ------------------------------------
// 3. reduce()
// ------------------------------------

const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total Salary:", totalSalary);


// ------------------------------------
// 4. find()
// ------------------------------------

const employee = employees.find(
    employee => employee.id === 2
);

console.log("Found Employee:", employee);


// ------------------------------------
// 5. some()
// ------------------------------------

const highSalaryExists = employees.some(
    employee => employee.salary > 65000
);

console.log("Salary above 65000:", highSalaryExists);


// ------------------------------------
// 6. every()
// ------------------------------------

const allAbove30000 = employees.every(
    employee => employee.salary > 30000
);

console.log("All salary above 30000:", allAbove30000);


// ------------------------------------
// 7. sort()
// ------------------------------------

const sortedEmployees = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("Sorted by Salary:", sortedEmployees);


// Descending order

const descendingEmployees = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Descending Salary:", descendingEmployees);