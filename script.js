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
