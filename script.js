function aviso_numero() {
    var principal = document.getElementById("principal").value;
            if(principal<=0){//si el input tipo numero es negativo o cero, saltara un mensaje
            alert("Enter a positive number");
          
            }
        } 
          
    
function compute()
{   //cuando se presione el boton calculara y mostrara en pantalla siempre que el input sea mayor a cero
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal>0){
    document.getElementById('result').innerHTML='If you deposit '+ '<mark>'+principal+',</mark>'+'<br>'+
        'at an interest rate of '+ '<mark>'+rate+'%,</mark>'+'<br>'+
        'You will receive an amount of '+'<mark>'+ interest+',</mark>'+'<br>'+
        'in the year '+ '<mark>'+year+'.</mark>';
    }
     
}
function updateRate() //si hay un cambio en el input range se mostrara el valor
{
var rateval = document.getElementById("rate").value;
document.getElementById("rate_val").innerText=rateval;
}
