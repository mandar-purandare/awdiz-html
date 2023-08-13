// conditionals

// if else
//while

// = for assigning a value
// == for checking equality
// === for checking strict equality (the data type should also match)

let num = 2; //asign

if( num === '2'){
    console.log('they are strictly equal');
}else{
    console.log('they are not strictly equal');
}

if( num == '2'){
    console.log('they are equal');
}else{
    console.log('they are not equal');
}

// conditional operators
// > greater than, < less than, || logical or, && logical and

let age = 15;

if( age > 13 && age < 18){
    console.log('its a teenager');
}else{
    console.log('not a teenager');
}

let skill = 'javascript'

if( skill == 'javascript' || skill == 'php'){
    console.log('knows programming');
}else{
    console.log('may know programming');
}

let tech = 'm';

switch(tech){
    case 'm':
        console.log('mongo db');
    break;
    case 'e':
        console.log('express js');
    break;
    case 'r':
        console.log('react js');
    break;
    case 'n':
        console.log('node js');
    break;
    default:
        console.log('non mern');
}

let repeatMessage = 3;

for(let i = 1; i<=3; i++){
    console.log(`Hello ${i}`);
}