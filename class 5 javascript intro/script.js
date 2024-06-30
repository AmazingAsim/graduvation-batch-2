// // variables and types 
// let name = 'Asim'
// var age = 26;
// let height;
// const hungry = true;
// const pi = 3.14;

// console.log(`hello my name is ${name}. And I am ${age} year old`);

// console.log('hello my name is '+name+". and i am "+age+" year old")

// {
//     var a = 10
//     let b = 20
// }

// console.log(a)
// // console.log(b)
// age = age+5


// //  datatypes

// let car = 'red' // string "" '' ``
// let phone = "7470587647"
// let z = 50;  // number
// console.log(50+z)
// console.log(typeof(z))

// let angry = false;  // boolean
// // arrays and objects

// let fruits = ['apple','banana','cherry','orange']

// console.log(fruits[3])

// fruits.push('guava')
// console.log(fruits.length)
// console.log(typeof(fruits))

// // objects

// let pen = {
//     color:"red",
//     ink:"gel",
//     price:"10rs",
//     write: function(message){console.log(message)}
// }




// functions

// bulid in functions 

// alert('welcome User');
// let username = prompt('what is your name');
// alert(`welcome ${username}`);
// let mad = confirm('Are you Mad ?');
// console.log(mad)

// custom functions
let result = sum(5,6)


function sum(a,b){
   console.log(`the sum of ${a} and ${b} is ${a+b}`);
   return a+b
}

console.log(result);

//
// fire();

let fire = function(){
    alert('I am a function without a name');
}

let jump = ()=>{console.log('jump jump')};


// let car = {
//     start: function(){console.log(this)},
//     stop: ()=>{console.log(this)}
// }

// car.start()
// car.stop()

(()=>{console.log('I am an iife')})()

// higher order function.
setTimeout(function(){console.log('sorry I am late')},5000)
// callback functions
// dom
// document object model


let headerElement = document.getElementById('header');

headerElement.style.background = 'red'
headerElement.innerHTML = 'New content'

let p = document.createElement('p');

p.innerHTML = 'hello there'

document.body.appendChild(p)

// localstorage
// async javascript

// bmi calculator

