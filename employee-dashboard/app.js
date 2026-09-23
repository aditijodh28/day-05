// ============================================
// EMPLOYEE DASHBOARD
// Day 5 - Modern JavaScript
// ============================================


// --------------------------------------------
// Employee Data
// --------------------------------------------

let employees = [

    {
        id: 1,
        name: "Aditi",
        department: "IT",
        salary: 50000
    },

    {
        id: 2,
        name: "Rahul",
        department: "HR",
        salary: 60000
    },

    {
        id: 3,
        name: "Priya",
        department: "Finance",
        salary: 45000
    },

    {
        id: 4,
        name: "Kartik",
        department: "IT",
        salary: 70000
    },

    {
        id: 5,
        name: "Neha",
        department: "HR",
        salary: 55000
    }

];


// --------------------------------------------
// DOM Elements
// --------------------------------------------

const tableBody =
    document.getElementById("employeeTableBody");

const searchInput =
    document.getElementById("searchInput");

const departmentFilter =
    document.getElementById("departmentFilter");

const sortSelect =
    document.getElementById("sortSelect");

const addEmployeeButton =
    document.getElementById("addEmployeeButton");

const modal =
    document.getElementById("employeeModal");

const closeModal =
    document.getElementById("closeModal");

const employeeForm =
    document.getElementById("employeeForm");

const modalTitle =
    document.getElementById("modalTitle");

const employeeId =
    document.getElementById("employeeId");

const employeeName =
    document.getElementById("employeeName");

const employeeDepartment =
    document.getElementById("employeeDepartment");

const employeeSalary =
    document.getElementById("employeeSalary");


// --------------------------------------------
// Display Employees
// --------------------------------------------

function displayEmployees(data) {

    tableBody.innerHTML = "";

    data.forEach(employee => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${employee.id}</td>

            <td>${employee.name}</td>

            <td>${employee.department}</td>

            <td>₹${employee.salary.toLocaleString()}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editEmployee(${employee.id})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteEmployee(${employee.id})">
                    Delete
                </button>

            </td>
        `;

        tableBody.appendChild(row);

    });

}


// --------------------------------------------
// Update Statistics
// --------------------------------------------

function updateStatistics(data) {

    document.getElementById("totalEmployees")
        .textContent = data.length;


    const itCount = data.filter(
        employee => employee.department === "IT"
    ).length;

    document.getElementById("itEmployees")
        .textContent = itCount;


    const hrCount = data.filter(
        employee => employee.department === "HR"
    ).length;

    document.getElementById("hrEmployees")
        .textContent = hrCount;


    const totalSalary = data.reduce(
        (total, employee) =>
            total + employee.salary,
        0
    );

    document.getElementById("totalSalary")
        .textContent =
        `₹${totalSalary.toLocaleString()}`;
}


// --------------------------------------------
// Filter and Search
// --------------------------------------------

function getFilteredEmployees() {

    const searchText =
        searchInput.value.toLowerCase();

    const department =
        departmentFilter.value;


    let result = employees.filter(employee => {

        const matchesSearch =
            employee.name
                .toLowerCase()
                .includes(searchText);


        const matchesDepartment =
            department === "all" ||
            employee.department === department;


        return matchesSearch && matchesDepartment;
    });


    // ----------------------------------------
    // Sorting
    // ----------------------------------------

    switch (sortSelect.value) {

        case "name":

            result.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            break;


        case "salaryLow":

            result.sort((a, b) =>
                a.salary - b.salary
            );

            break;


        case "salaryHigh":

            result.sort((a, b) =>
                b.salary - a.salary
            );

            break;
    }


    return result;
}


// --------------------------------------------
// Refresh Dashboard
// --------------------------------------------

function refreshDashboard() {

    const filteredEmployees =
        getFilteredEmployees();

    displayEmployees(filteredEmployees);

    updateStatistics(filteredEmployees);
}


// --------------------------------------------
// Open Add Employee Modal
// --------------------------------------------

function openAddModal() {

    modalTitle.textContent =
        "Add Employee";

    employeeForm.reset();

    employeeId.value = "";

    modal.style.display = "flex";
}


// --------------------------------------------
// Edit Employee
// --------------------------------------------

function editEmployee(id) {

    const employee =
        employees.find(employee =>
            employee.id === id
        );


    if (!employee) {
        return;
    }


    modalTitle.textContent =
        "Edit Employee";


    employeeId.value =
        employee.id;

    employeeName.value =
        employee.name;

    employeeDepartment.value =
        employee.department;

    employeeSalary.value =
        employee.salary;


    modal.style.display = "flex";
}


// --------------------------------------------
// Delete Employee
// --------------------------------------------

function deleteEmployee(id) {

    const employee =
        employees.find(
            employee => employee.id === id
        );


    if (!employee) {
        return;
    }


    const confirmed =
        confirm(
            `Delete employee ${employee.name}?`
        );


    if (!confirmed) {
        return;
    }


    employees =
        employees.filter(
            employee => employee.id !== id
        );


    refreshDashboard();
}


// --------------------------------------------
// Add / Update Employee
// --------------------------------------------

employeeForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            employeeName.value.trim();

        const department =
            employeeDepartment.value;

        const salary =
            Number(employeeSalary.value);


        if (!name || salary <= 0) {

            alert(
                "Please enter valid employee details."
            );

            return;
        }


        // ------------------------------------
        // Update Existing Employee
        // ------------------------------------

        if (employeeId.value) {

            const id =
                Number(employeeId.value);


            const employee =
                employees.find(
                    employee => employee.id === id
                );


            if (employee) {

                employee.name =
                    name;

                employee.department =
                    department;

                employee.salary =
                    salary;
            }

        }

        // ------------------------------------
        // Add New Employee
        // ------------------------------------

        else {

            const newEmployee = {

                id: employees.length > 0
                    ? Math.max(
                        ...employees.map(
                            employee => employee.id
                        )
                    ) + 1
                    : 1,

                name,

                department,

                salary

            };


            employees.push(newEmployee);
        }


        modal.style.display = "none";

        refreshDashboard();

    }
);


// --------------------------------------------
// Event Listeners
// --------------------------------------------

searchInput.addEventListener(
    "input",
    refreshDashboard
);


departmentFilter.addEventListener(
    "change",
    refreshDashboard
);


sortSelect.addEventListener(
    "change",
    refreshDashboard
);


addEmployeeButton.addEventListener(
    "click",
    openAddModal
);


closeModal.addEventListener(
    "click",
    () => {
        modal.style.display = "none";
    }
);


// Close modal when clicking outside

window.addEventListener(
    "click",
    event => {

        if (event.target === modal) {
            modal.style.display = "none";
        }

    }
);


// --------------------------------------------
// Initial Dashboard
// --------------------------------------------

refreshDashboard();