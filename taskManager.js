// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER;

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Arrays for storing tasks
const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = ``;

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends/closes the Task Manager (Until until the user enters CLOSE (Uppercase or Lowercase))
while (userInput.toUpperCase() !== "CLOSE"){

  // ====================================================
  // CODE TO COMPLETE TASK MANAGER SHOULD BE WRITTEN HERE
  // ====================================================

  // TASKS
  // Checks if user entered TASKS (Uppercase or Lowercase)
  if (userInput.toUpperCase() === `TASKS`){

    // The For Of loop is used here to concatenate each task (AKA Item) in the tasks array to the showTasks string variable
    for (task of tasks){

      // Using \n to create a new line (AKA Line break) after each task
      showTasks += `${task}\n`;
    }
    // OR
    // for (i = 1; i < tasks.length; i++){
    //   showTasks += `${i}: ${tasks[i - 1]}\n`;
    // }

    // Displays all the tasks
    alert(`Here are the tasks:\n${showTasks}`);

    // Sets the value of the showTasks String variable back to an empty string
    showTasks = ``;
  }

  // NEW
  // Checks if user entered NEW (Uppercase or Lowercase)
  if (userInput.toUpperCase() === `NEW`){

    // Prompts the user to enter a new tasks and stores their response
    newTask = prompt(`Enter the new task:`);

    // Continues looping and prompting the user until something is entered (NOTE: If the user does NOT type anything and just clicks OK, then the value returned will be an empty string)
    // Also, if the user only enters a space or spaces then the value returned will also be an empty string since the Trim method is used here
    while (newTask.trim() === ``){
      newTask = prompt(`Enter the new task:`);
    }

    // Adds the new task to the end of the array
    tasks.push(newTask);

    // Alerts/confirms the new task that has been added to the array
    alert(`"${newTask}" has been added`);
  }

  // REMOVE
  // Checks if user entered REMOVE (Uppercase or Lowercase)
  if (userInput.toUpperCase() === `REMOVE`){

    // The For loop is used here to concatenate each task (AKA Item) in the tasks array to the showTasks string variable. Also, sets/displays a number for each task.
    for (i = 0; i < tasks.length; i++){

      // Adding 1 to i (AKA The index) so the numbers will start displaying at 1. Also, using \n to create a new line (AKA Line break)
      showTasks += (i + 1 + `: ` + tasks[i] + `\n`);
    }

    // Prompts the user to enter a number and stores their response to the num variable
    // Using \n to create a new line (AKA Line break)
    num = prompt(`Please enter a number to remove:\n${showTasks}`);

    // Loop that continues looping until the user enters a valid response (AKA Number)
    // Verifies the user entered in a number that is one of options shown in the prompt (AKA Within the number range from 1 to the length of the tasks array)
    // The 1st condition (num < 1) checks to see if the user entered in 0 (Zero) or a negative number
    // The 2nd condition (num > tasks.length) checks to see if the user entered in a number that is higher than the length of the tasks array (AKA Higher the highest number displayed in the prompt)
    // The 3rd condition (isNaN(num)) checks to see if the user did NOT enter in a number
    while (num < 1 || num > tasks.length || isNaN(num)) {
      num = prompt(`Please enter a number to remove:\n${showTasks}`);
    }

    // Removes the task/item selected by the user from the tasks array. Also, sets the task/item that was removed to the REMOVED variable (NOTE: Splice returns the value(s) that is removed as an item(s) in an array)
    removed = tasks.splice(num - 1, 1);

    // Alerts user with the task/item that has been removed (NOTE: Using index on the REMOVED variable here because splice returns the value that is removed as an item an an array)
    alert(`"${removed[0]}" has been removed`);

    // Sets the value of the showTasks string variable back to an empty string
    showTasks = ``;
  }

  // Displays the menu again
  userInput = prompt(menu);

  // This break can be commented out after the CLOSE feature is complete
  // break;
}

// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager!`);
