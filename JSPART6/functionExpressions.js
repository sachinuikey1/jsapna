// const variable = function(arg1, arg2..){
    // do or return something.
//}


// let sum = function(a, b){
//     return a+b;
// }

// console.log(sum(1, 3));


// let hello = function(){
//     console.log("hello");
// }

// hello = 
// console.log("hello");


// Higher Order Functions

// A function that does one ar both:

// function multipleGreet(func, count){
//     for(let i=1; i<= count; i++){
//         func();
//     }
// }
//     let greet = function(){
//         console.log("hello");
//     }

//     multipleGreet(function() {console.log("namaste")}, 5);




    let str="abcdabcdefgggh";

    //functiontogetStringwithalluniqueelements

    function getUnique(str){
        let ans = "";
        for(let i=0; i<str.length; i++){
            let currChar=str[i];
            if(ans.indexOf(currChar) == -1){

                //ifcurrentcharacterisnotadded,thenadditinans.
                //Otherwiseitisaduplicate.

                ans += currChar;
            }
        }
        return ans;
    }

    console.log(getUnique(str));


    // LONGEST NAME OF COUNTY PRINT...

    let country = ["australia", "germany", "united state of america"];

    function longestName(country){
        let ansIdx = 0;
        for(let i=0; i<country.length; i++){
            let ansLen = country[ansIdx].length;
            let currLen = country[i].length;

            if(currLen > ansIdx){
                ansIdx = i;
            }
        }
        return country[ansIdx];
    }
    // longestName(country);

    console.log(longestName(country));
    
