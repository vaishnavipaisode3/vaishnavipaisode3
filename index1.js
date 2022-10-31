// Todo: Make M+ M- and MC functional
let string="";
let buttons=document.querySelectorAll('.buttom');
Array.from(buttons).fontEach((button)=>{
button.addEventListene('click',(e)=>{
    if(e.target.innerHTML== '='){
        string=eval(string);
        document.querySelector('input').value=string;
    }  
    if(e.target.innerHTML== 'C'){
        string=""
        document.querySelector('input').value=string;
    }  
    else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    }
console.timeLog(e.target)
string = string + e.target.innerHTML;
document.querySelector('input').value=string;
})
})