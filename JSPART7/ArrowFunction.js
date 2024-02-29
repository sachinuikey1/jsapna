

// const sum =(a, b) => {
//     console.log(a+b);
// };

// console.log(sum(3, 6));

// // Implicit return 

// // const funct = (arg1, arg2..) => {value}

// const color = (a, b) => {
//     console.log(a *b);
// }

// console.log(color(5, 5));

// this with Arrow Functions:

// Arrow                            function
//  1) lexical scope                1) scope -> this -> calling object


// parent -> call


// const student = {
//     name: "sachin",
//     marks: 85,
//     prop: this,
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);
//         return this.marks;
//     }
// };

// const a = 5;

// console.log(student.getMarks);

// Practic Qs. Square of a number 'n'.

// const square = (n) => n * n;

// console.log(square(4));

// print "Hello World" 5 times at intervals of 2s each.


// let id = setInterval( () => {
//     console.log("Hello World");
// }, 2000);

// setTimeout( () => {
//     clearInterval("clear interval ran");
// })
// console.log(id);

const arrayAverage = (arr) =>  {
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total/arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));

// Evem print

let num = 4;
const isEven =( (num) =>{
    num % 2 == 0;
}, 1000)

console.log(num);


const object = {
    message: 'Hello, World',

    logMessage(){
        console.log(this.message);
    }
};
setTimeout (object.logMessage, 1000);


// console.log(object);


let length = 4;
function callback(){
    console.log(this.length);
}

// console.log(length);