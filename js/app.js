'use strict';
alert('hello')
var score = 0;
let first_qustion1 = prompt('do you think iam 25?');
first_qustion1 = first_qustion1.toLowerCase();

while (!(first_qustion1=="yes" || first_qustion1=="y" || first_qustion1=='no' || first_qustion1=='n')){

    first_qustion1 = prompt('please answer with yes or no')
    first_qustion1 = first_qustion1.toLowerCase();
}

first_qustion1 = first_qustion1.toLowerCase();

if(first_qustion1=="yes" || first_qustion1=="y" || first_qustion1=='no' || first_qustion1=='n' ){


switch (first_qustion1){
    case 'yes' :
    case 'y' :  
        alert('you faield');
        console.log('you faield');
        break;
case 'no' :
    case 'n':
     alert('true');
     console.log('true');
     score++;
     break;


}
}

let qustion2 = prompt('do you think chess is my best hobby?');
qustion2 = qustion2.toLowerCase();

while (!(qustion2=="yes" || qustion2=="y" || qustion2=='no' || qustion2=='n')){

    qustion2 = prompt('please answer with yes or no')
    qustion2 = qustion2.toLowerCase();
}

qustion2 = qustion2.toLowerCase();

if(qustion2=="yes" || qustion2=="y" || qustion2=='no' || qustion2=='n' ){


switch (qustion2){
    case 'yes' :
    case 'y' :  
        alert('exactly');
        console.log('exactly');
        score++;
        break;
case 'no' :
case 'n':
     alert('no');
     console.log('no');
     break;


}
}



let qustion3 = prompt('Iam married?');
qustion3 = qustion3.toLowerCase();

while (!(qustion3=="yes" || qustion3=="y" || qustion3=='no' || qustion3=='n')){

    qustion3 = prompt('please answer with yes or no')
    qustion3 = qustion2.toLowerCase();
}

qustion3 = qustion3.toLowerCase();

if(qustion3=="yes" || qustion3=="y" || qustion3=='no' || qustion3=='n' ){


switch (qustion3){
    case 'yes' :
    case 'y' :  
        alert('no hhhhhh');
        console.log('no hhhhhh');
        break;
case 'no' :
case 'n':
     alert('yes bro');
     console.log('yes bro');
     score++;
     break;


}
}


let qustion4 = prompt('I like to live in countryside ?');
qustion4 = qustion4.toLowerCase();

while (!(qustion4=="yes" || qustion4=="y" || qustion4=='no' || qustion4=='n')){

    qustion4 = prompt('please answer with yes or no')
    qustion4 = qustion4.toLowerCase();
}

qustion4 = qustion4.toLowerCase();

if(qustion4=="yes" || qustion4=="y" || qustion4=='no' || qustion4=='n' ){


switch (qustion4){
    case 'yes' :
    case 'y' :  
        alert('yes exactly');
        console.log('yes exactly');
        score++;
        break;
case 'no' :
case 'n':
     alert('no try another time');
     console.log('no try another time');
     break;


}
}

let qustion5 = prompt('go with my friend anywhere have soft drink makes me happy?');
qustion5 = qustion5.toLowerCase();

while (!(qustion5=="yes" || qustion5=="y" || qustion5=='no' || qustion5=='n')){

    qustion5 = prompt('please answer with yes or no')
    qustion5 = qustion2.toLowerCase();
}

qustion5 = qustion5.toLowerCase();

if(qustion5=="yes" || qustion5=="y" || qustion5=='no' || qustion5=='n' ){


switch (qustion5){
    case 'yes' :
    case 'y' :  
        alert('yes alot');
        console.log('yes alot');
        score++;
        break;
case 'no' :
case 'n':
     alert('no');
     console.log('no');
     break;


}
}


let name = prompt('whats your name bro?');
alert('Hello '+ name +' welcome to My Website' );





// var age = prompt('gues my age?');
// age = Number(age);
// for (let i = 0; i < 4; i++) {

//     if (age == 27) {
//         alert('you guess man');
        
//          break;
//     }else if (age > 27) {
//         alert('too high');
//         age = prompt('gues my age?');
//         age = Number(age)
//         // continue;
//     } else if (age < 27) {
//         alert('too low');
//         age = prompt('gues my age?');
//         age = Number(age)
//     }else{
//         alert('my age is 27');

//     }

// }
var age = prompt('gues my age?');
age = Number(age);
for (var i = 1; i < 4; i++) {
    if (age == 27) {
        alert('correct answer');
        console.log('correct answer');
        score++;
        break;
    } else if (age > 27) {
        alert('too high');
        var age = prompt('gues my age?');
        age = Number(age);

    } else {
        alert('too low');
        var age = prompt('gues my age?');
        age = Number(age);

    }
    if(i==3){

        alert('my age is 27')
    }



}



for(let i=0 ; i<6 ;i++){
let Fmeal = prompt('My faviorate faviorate meal is?')
let x = ['shawirmah','munsaf','maqlubah','flafel']


if (Fmeal == x[0] || Fmeal == x[1] || Fmeal == x[2] || Fmeal == x[3] ){
    alert('good job');

    console.log('good job');
    score++;
    break;
}else {

    alert('wrong answer hhhh')
}
if (i < 5){
    continue;
}
    alert('I like: shawirmah, munsaf,maqlubah,flafel');
   






}
alert('i come from joradn');

alert(score);