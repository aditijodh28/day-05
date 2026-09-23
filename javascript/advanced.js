// DAY 5 - Advanced JavaScript


// ------------------------------------
// 1. Scope
// ------------------------------------

let globalVariable = "Global";

function testScope() {
    let localVariable = "Local";

    console.log(globalVariable);
    console.log(localVariable);
}

testScope();


// ------------------------------------
// 2. Closure
// ------------------------------------

function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increase = counter();

console.log("Counter:", increase());
console.log("Counter:", increase());
console.log("Counter:", increase());


// ------------------------------------
// 3. Hoisting
// ------------------------------------

sayHello();

function sayHello() {
    console.log("Hello JavaScript");
}


// ------------------------------------
// 4. Callback
// ------------------------------------

function processEmployee(name, callback) {
    console.log("Processing:", name);
    callback();
}

processEmployee("Aditi", () => {
    console.log("Employee processed successfully");
});


// ------------------------------------
// 5. Promise
// ------------------------------------

const employeePromise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Employee data loaded");
    } else {
        reject("Failed to load employee data");
    }
});

employeePromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });


// ------------------------------------
// 6. async / await
// ------------------------------------

async function getEmployee() {

    try {

        const promise = Promise.resolve({
            id: 1,
            name: "Aditi"
        });

        const employee = await promise;

        console.log("Employee:", employee);

    } catch (error) {

        console.error("Error:", error);

    }
}

getEmployee();


// ------------------------------------
// 7. Event Loop
// ------------------------------------

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


// Expected order:
//
// Start
// End
// Promise
// Timeout