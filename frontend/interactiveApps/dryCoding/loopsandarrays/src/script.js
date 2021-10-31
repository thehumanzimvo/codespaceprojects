//Activity 1 - Create a variable called "tasks" with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat']
//Using the "for" loop display the value of each of these items
//"console.log" the output, separated by a space
//Add your code below
let tasks = [
    'wash mouth', 'wash face', 'make bed', 'procrastinate', 'review calendar', 'review previous day', 'code', 'study', 'practice', 'sleep', 'forget to bath'
]
for(i of tasks) {
    console.log(i)
}

//Activity 2 - Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6
//console.log your output
//Add your code below
let gir = 0;
for(i in tasks) {
    gir += parseInt(i);
}
console.log(gir);


//Activity 3 - Using the tasks variable created above
//Create a loop that performs the 15 times table
//Leading up to the "length" of your tasks variable
//Add your code below
for (i in tasks) {
    console.log(`15 x ${parseInt(i)+1} = ${15*(parseInt(i)+1)}`)
}

//Activity 4 - Edit your code in activity 3, by creating an array called timesTable
//And store each value of the your fifteen times table in it
//Add your code below
let timesTable = [];
for (i in tasks) {
    timesTable.push(15*(parseInt(i)+1));
    // console.log(timesTable);
}


//Activity 5 - Using the array you created in the Activity 4, loop through the array and print each value to the console.
//Add your code below
for(time of timesTable) {
    console.log(time)
}

//Activity 6 - Use the .reduce() built-in method to calculate the average of the array created in Activity 4.
//Add your code below
let avR = 0;
for(times of timesTable) {
    avR += times;
}
function october() {
    return avR / timesTable.length;
}
console.log(timesTable.reduce(october, 0));


//Bonus Activity
//Repeat the output of what you produced in activity 6, this time by not using the .reduce function
//Add your code below
let avN = 0;
for(times of timesTable) {
    avN += times;
}
avN = avN/timesTable.length;
console.log(avN);

//Create a "for of" loop, looping through the values of your tasks variable created in activity 1
//console.log the output
//Add your code below
for(task of tasks) {
    console.log(task);
}

//Try to replicate the above activity by using a "for in" loop instead
//Does this work? can you understand and explain why it displays what it displays?
//Add your code below
for(task in tasks) {
    console.log(tasks[task])
}




















// let myObj = {
//     "Vampire" : "midnight", 
//     "Werewolf" : "midnight", 
//     "Frankenstein" : "dusk"
//   };
  
//   for(x in myObj){
//     console.log("Key : " + x + " | Value : " + myObj[x]);
//   }


// let Werewolf = Symbol();

// let myObj = {
//   "Vampire" : "midnight", 
//   [Werewolf] : "midnight", 
//   "Frankenstein" : "dusk"
// };

// for(x in myObj){
//   console.log("Key : " + x + " | Value : " + myObj[x]);
// }

 

// function myFunction(param1, param2, ...restParams) {
//     console.log(arguments[4]);
//   }
  
//   myFunction("a", "b", "c", "d", "e");

// function alphabetSoup(...theArg) {
//     let soup = theArg.sort()
//     return soup;
//   }
  
//   console.log(alphabetSoup("f", "d", "a", "c", "b", "e"))


