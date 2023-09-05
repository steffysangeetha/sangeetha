import {add} from './script.js.mjs';

// global scope

let x = 'global';
console.log('value of x in global scope:'+ x);

//block scope

function myfun(){
    const x='functional';
    console.log('value of x in functional scope:' + x);
    if (true) {
        const x='block';
        console.log('value of x in block scope:' + x);
    }
}
myfun();

//lexical scope
function newfun(){
    console.log('value of x in lexical scope:' + x);
}
newfun();
//console.log(typeof add);
let z=[1,2,3,4,5];
consle.log(add(...z));