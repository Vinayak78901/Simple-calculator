// let string = "";
// let buttons = document.querySelectorAll('.button');

// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('.input').value = string;
//         }
//         else if (e.target.innerHTML == 'C') {
//             string = "";
//             document.querySelector('.input').value = string;
//         }
//         else if (e.target.innerHTML == 'A/C') {
//             string = string.slice(0, -1);               // remove last character
//             document.querySelector('.input').value = string; // update display
//         }


//         else {
//             string += e.target.innerHTML;
//             document.querySelector('.input').value = string;
//         }

//     });
// });   
/*
let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML.trim();

        if (value === '=') {
            string = eval(string);
        }
        else if (value === 'C') {
            string = "";
        }
        else if (value === 'A/C') {
            string = string.slice(0, -1); // remove last character
        }
        else {
            string += value; // append numbers/operators only
        }

        document.querySelector('.input').value = string;
    });
});*/


// let string="";
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         const value=e.target.innerHTML.trim();
//         if(value==='='){
//             string=eval(string)
//         }
//         else if(value=='C'){
//             string=""
//         }
//         else if(value=='A/C'){
//             string=string.slice(0,-1)
//         }
//         else{
//             string+=value
//         }
//         document.querySelector('.input').value=string;
//     })
// })
































let string=""
let buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
   button.addEventListener('click',(e)=>{
    const val=e.target.innerHTML.trim()
    if(val==='='){
        string=eval(string)
    }
    else if(val=='C'){
        string="";
    }
    else if(val=='A/C'){
        string=string.slice(0,-1)
    }
    else{
        string+=val
    }
document.querySelector('.input').value=string;
   })
})