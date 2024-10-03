let taskList = ['shopping', 'gym', 'study', 'clean', 'bills'];
console.log(taskList);

// add task to the end of list
taskList.push('laundry');

//remove the first element
taskList.shift();

//remove last element
taskList.pop();

//remove the 3rd element
taskList.splice(2,1);

//display current list
console.log(taskList);