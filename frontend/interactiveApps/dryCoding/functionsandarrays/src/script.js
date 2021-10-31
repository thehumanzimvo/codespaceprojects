//Below you shall find a tasks array which we will use for the rest of this challenge
//One line below this is the tasksCompleted array that we are going to use further use
tasks = ['swim', 'eat', 'study', 'read', 'sleep', 'awake', 'breakfast', 'party', 'relax', 'exercise'];;
tasksCompleted  = [true, false, true, true, false];

//Activity 1 - Edit the tasksCompleted array by programmatically doing the following:
/*  1) Remove the first completed task
    2) Add a new completed task of false at beginning of the array
    3) Add a new completed task of true at the end of the array
    4) Add two more completed tasks with a boolean value of your choice, to the end of the array
*/
//Add your code below
for(x in tasksCompleted) {
    if (tasksCompleted[x] == true) {
        // console.log(tasksCompleted);
        tasksCompleted.splice(x, 1);
        tasksCompleted.unshift(false);
        tasksCompleted.push(true);
        tasksCompleted.push(true, true)
        // console.log(tasksCompleted);
        // console.log(tasksCompleted[x]);
        break;
    }
    break;
}


//Activity 2 - Complete this function. 
//Create a for loop that can loop through an array and print out all the array items in the console.
//This function takes a parameter of arrayName.
    function displayArray(arrayName){
    //Add your code below
        for(newArray of arrayName) {
            console.log(newArray);
        }
    }
    
//Activity 3 - Print the tasks array to the console by using the function you created in Activity 2
//Add your code below
displayArray(tasks);


//Activity 4 - Complete this function.
//The purpose of this function is to calculate the sum of all the values in an array.
//Create a variable inside this function called total and set it equal to 0.
//Create a for loop that calculates the sum of all the values in an array store the answer in the total variable.
//Outside the for loop, console log the total.
//######### i am unclear of the requirement here, so I adjusted it to work with Activity 5
    function calculateTotal(arrayName){
    //Add your code below
    let total = 0;
    for(thisArray in arrayName) {
        total += parseInt(thisArray);
    }
    // console.log(total)

    }

//Activity 5 - Call the calculateTotal function and pass tasksCompleted as an argument.
//Add your code below
calculateTotal(tasksCompleted);



//Activity 6 - Complete this function
//The purpose of this function is to calculate the average of the values put together in an array
//Create a variable inside this function called total and set it equal to 0
//Create a for loop that calculates the sum of all the values in an array, store the answer in the total variable
//Outside the for loop, create a variable called average and store your calculations of the average in that variable
//Add your code below
function averageCount(yourArray) {
    let total = 0;
    for(thisArray in yourArray) {
        total += parseInt(thisArray);
    }
    let average = total / yourArray.length;
    // console.log(average);
}


//Activity 7 - Call your calculate average function with tasksCompleted array as it's argument
//Add your code below
averageCount(tasksCompleted);

//Bonus Activity:
//Rewrite activity 6 to calculate the average of the amount of tasksCompleted that is equal to true
//Add your code below
function buddyHolly(yourArray) {
    let total = 0;
    for(thisArray in yourArray) {
        if(yourArray[thisArray] == true) {
            // console.log(yourArray[thisArray]);
            total += parseInt(thisArray);
        }
    }
    let average = total / yourArray.length;
    // console.log(average);
}
buddyHolly(tasksCompleted);

//Create a function that takes two array parameters, the second parameter being a rest parameter
//Within your function block, specify a condition to prevent your function from having more than a 3 argument values
//Within the arguments condition, loop through the array arguments provided and console.log each value
//Console.log your argument length an your function
//Refer to the Arguments method taught in the 3rd lesson
//Add your code below
function raining(varUno, ...otherVars/*function in here?*/) {
    if(arguments.length > 3) {
        console.log(`that's illegal!`)
        return;
    } else { //i assume the arguments are arrays themselves
        for(arg in arguments) {
            for (girgir of arguments[arg]) {
                console.log(girgir)
            }
        }
    }
}