//function setcookies(){
    //document.cookie=null;
//}setcookies();


// Create a value in the local storage
localStorage.setItem('name', 'jackie');

// Create a value in the session storage
sessionStorage.setItem('age', '25');

// Retrieve the value from the local storage
const name = localStorage.getItem('name');

// Retrieve the value from the session storage
const age = sessionStorage.getItem('age');

// Log the values to the console
console.log(name); // Jackie
console.log(age); // 25





