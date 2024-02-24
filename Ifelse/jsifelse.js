//conditional statements

// console.log("before my if statement");
// let age = 17;
//     if(age >= 18){
//     console.log("you can vote");
//     console.log("you can drive");
// }
// if(age < 18){
//     console.log("you cannot vote");

// }
// console.log("after my if statement");


// let firstName = "mangesh";
// if (firstName == "sachin"){
//     console.log(`Welcome ${firstName}`);
// }

// let color = "red";

// if (color == "red"){
//     console.log("Stop the car");
// }
// if (color == "yellow"){
//     console.log("stow down the car");
// }
// if (color == "green"){
//     console.log("go")
// }


// QSF. A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a program to find if a string is good or not.

// let str = "ample";

// if (str [0] === 'a' && str.length > 3){
//     console.log("good string");
// }else{
//     console.log("not a good string");
// }


// // QSD. Predict the output of following code

// let num = 12;

// if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))){
//     console.log("safe");
// }else{
//     console.log("unsafe");
// }

//Switch statement

// used when we have some fixed values that we need to compare to.

// let color = "pink";

// switch(color){
//     case "red":
//         console.log("stop");
//         break;
    
//     case "green":
//         console.log("Go");
//         break;

//     case "yellow":
//         console.log("slow down");
//         break;

//     default :
//         console.log("Broken Light");
// }

let day = "3";

switch(day){
    case "1":
        console.log("Monday");
        break;

    case "2":
        console.log("Tuesday");
        break;

    case "3":
        console.log("Wednesday");
        break;

    case "4":
        console.log("Thrusday");
        break;

    case "5":
        console.log("Friday");
        break;

    case "6":
        console.log("Saturday");
        break;

    case "7":
        console.log("Sunday");
        break;

    default :
        console.log("Not a match day");
}