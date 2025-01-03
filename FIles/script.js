

let celcius = document.getElementById("celciusin");
let fahrenheit = document.getElementById("fahrenheit");


function ftoc()
{
    window.location.replace('ftoc.html');
    celcius.disabled=true;
    fahrenheit.disabled=false;
}
function ctof(){
    window.location.replace('ctof.html')
    fahrenheit.disabled=true;
    celcius.disabled=false;
}
function convert() {
  
    let celciusinput = parseFloat(celcius.value);
    let fahrenheitinput = parseFloat(fahrenheit.value);

    if (isNaN(celciusinput) && !isNaN(fahrenheitinput)) {
        celcius.value = ((fahrenheitinput - 32) * 5 / 9).toFixed(2);
    } else if (isNaN(fahrenheitinput) && !isNaN(celciusinput)) {
        fahrenheit.value = ((celciusinput * 9 / 5) + 32).toFixed(2);
    } 
    else if (isNaN(celciusinput) && isNaN(fahrenheitinput)) {
        alert('Please enter a temperature you want to convert');
    }
    else if (!isNaN(fahrenheitinput) && !isNaN(celciusinput)) {
        fahrenheit.value = null
        celcius.value = null
    }
    else {
        alert('Error Calculating');
    }
    // window.location.replace('/Temperature%20Converter/FIles/index.html');
}
fahrenheit.addEventListener('focus', ()=>{
    fahrenheit.value=null ;
    celcius.value=null;
})

celcius.addEventListener('focus', ()=>{
    fahrenheit.value=null ;
    celcius.value=null;
})

function back(){
    window.location.replace("/Temperature%20Converter/FIles/index.html")
}



    








    

