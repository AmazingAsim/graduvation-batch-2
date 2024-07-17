let nameInput = document.getElementById('name');
let age = document.getElementById('age');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let result = document.getElementById('result');
let resultMessage = '';
let bmiData = JSON.parse(localStorage.getItem('bmiData')) || [];

if(bmiData.length){   // 0 , '',null,undefined, NaN,false
   bmiData.map(function(data){
    renderData(data)
   })
}

function calc(){
    let bmi = (weight.value)/(height.value*height.value);
    if(bmi<=18.5){
        resultMessage = `You are under weight`
    }
    else if(bmi>18.5 && bmi<=24.9){
        resultMessage = 'You are Fit.'
    }
    else if(bmi>24.9 && bmi<=29.9){
        resultMessage = 'You are over-weight.'
    }
    else if(bmi>=30 && bmi<=34.9){
        resultMessage = 'You are Obese.'
    }
    else{
        resultMessage = 'Extreamly Obese'
    }
    result.innerHTML = `
    <h3>${bmi}</h3>
    <p>${resultMessage}</p>
    `

    let newData = {
        name:nameInput.value,
        age:age.value,
        height:height.value,
        weight:weight.value,
        bmi:bmi,
        message:resultMessage,
        timeStamp:new Date()
    }
    renderData(newData)
    bmiData.push(newData);
    localStorage.setItem('bmiData',JSON.stringify(bmiData));
    nameInput.value = ""
    age.value = ''
    height.value = ""
    weight.value = ""
}


function renderData(data){
    let dataBox = document.getElementById('data');
    let div = document.createElement('div');
    div.innerHTML = 
    `
    <h3>${data.name}</h3>
    <h4>age:${data.age}</h4>
    <h4>height:${data.height}</h4>
    <h4>weight:${data.weight}</h4>
    <h4>BMI:${data.bmi}</h4>
    <h4>result:${data.message}</h4>
    <h4>Date and Time:${data.timeStamp}</h4>
    `

    dataBox.appendChild(div);
}