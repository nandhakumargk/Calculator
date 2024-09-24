const display = document.getElementById('display')

function displayvalue(input) {
    display.value += input;
}

function clearvalue(){
    display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "Error"
    }
}