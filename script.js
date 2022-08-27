function clearScreen(){
    let displayBox = document.getElementById("result");
    displayBox.value = "";
    return
}

function display(value){
    let displayBox = document.getElementById("result");
    displayBox.value += value;
    return
}

function calculateResult(){
    let displayBox = document.getElementById("result").value;
    let answer = eval(displayBox);
    document.getElementById("result").value = answer;
    return
}