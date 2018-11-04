var firstName = 'Byron';
var lastName = 'Baldwin';

console.log(firstName);
console.log(lastName);

const states = 50;

var val1 = 5;
var val2 = 4;

var result = val1 + val2;

console.log(result);

var firstName = 'Byron';
var index = 0;

//ASCII Character Code for the letter 'B', at index '0' is 66
if(firstName.charCodeAt(index) >= 76) {
    console.log('Back of the Line!');
} else {
    console.log('Next!');
}
//The condition states that if the first letter of 'Byron' is after the letter 'L'
//Then it will print 'Back of the Line!'
//if it is not, then it will print, 'Next!'

console.log(sayHello('Hello World!'))

function sayHello(string) {
    return(string);
}


let person = ['Charles', 'Abbey', 'James', 'John'];

let Charles = {name: 'Charles', age: 21};
let Abbey = {name: 'Abbey', age: 27};
let James = {name: 'James', age: 18};
let John = {name: 'John', age: 17};

for (let i = 0; i <  person.length; i++) {
    checkAge(person[i].name, person[i].age);
};

checkAge('Charles', 21);
checkAge('Abbey', 27);
checkAge('James', 18);
checkAge('John', 17);

function checkAge(name, age) {
    if (age < 21) {
    console.log("Sorry "+ name +", you aren't old enough to view this page!");
} else {
    console.log(""+ name + "," , "You may view this page");
}
}
