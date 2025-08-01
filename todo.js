// let todo = [];
// let req = prompt("please enter your request");


// while (true) {

//     if (req == "quit") {
//         console.log("quitting app");
//         break;

//     }
//     if (req == "list") {
//         console.log("----------");
//         for (task of todo) {
//             console.log(task);
//         }
//         console.log("----------");

//     } else if (req == "add") {
//         let task = prompt("please enter your task you want to add");
//         todo.push(task);
//         console.log(" task added");
//     } else if (req == "delete") {
//         let idx = prompt("please enter the task index");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     } else {
//         console.log("wrong request");

//     }
//     req = prompt("please enter your request");
let todo = [];
let req;

while (true) {
    req = prompt("please enter your request (list, add, delete, quit)");

    if (req === "quit") {
        console.log("Quitting app...");
        break;
    }

    if (req === "list") {
        console.log("----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("----------");

    } else if (req === "add") {
        let task = prompt("Please enter the task to add:");
        todo.push(task);
        console.log("Task added.");

    } else if (req === "delete") {
        let idx = parseInt(prompt("Enter the index of the task to delete:"));
        if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
            let deleted = todo.splice(idx, 1);
            console.log(`Deleted: ${deleted}`);
        } else {
            console.log("Invalid index.");
        }

    } else {
        console.log("Unknown request. Please enter list, add, delete, or quit.");
    }
}




// }