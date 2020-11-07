// Arrays to keep track of each task's state




// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask (title,description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    updateTaskstatus: function () {
      this.complete = true;
    }
  }
  return task;
}





// DRIVER CODE BELOW
let tasks = [];
tasks.push(newTask("Clean Cat Litter","Take all the garbage out")); // task 0
tasks.push(newTask("Do Laundry", "no way")); // task 1
tasks[0].logTaskState();
tasks[0].updateTaskstatus();
tasks[0].logTaskState();
