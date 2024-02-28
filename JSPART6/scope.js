// Scope determines the accessibility of variables, objects, and functions from different parts of the code.


// Function
// Block
// Lexical
// Gobal


// function defined inside a function are not accessible (visible) from outside the function.

// function calSum(a, b){
//     let sum = a+b;
// }
// calSum(4,5);


// Block scope: variable declared inside a { } block cannot be accessed from outside the block.
//


// {
//     let a = 34;
// }
// console.log(a);

// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// console.log(i);

// let age = 25;

// if(age >= 18){

// }

//Lexical scope: 

// a veriable defined 

// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//     }
//     innerFunc();
// }

// outerFunc();

// PRACTICE QUESTIONS.

let greet = "hello";  // global scope

function changeGreet(){
    let greet = "namaste";  // function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet); // lexical scope.
    }

}

console.log(greet);
changeGreet();
