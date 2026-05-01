function show1(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const txt1 = document.getElementById("txt1").value;

    if(isNaN(num1)){
        alert("Invalid input! Please enter a valid number.");
    }

    for(let i = 1; i <= num1; i++){
        document.getElementById("show1").innerHTML = document.getElementById("show1").innerHTML+i+ "."+ txt1 +"</br>";
    }
}

function clearFields1() {
    document.getElementById("show1").innerHTML = " ";
}

function show2() {
    const num2 = parseFloat(document.getElementById("num2").value);
    const txt2 = document.getElementById("txt2").value;

    if (isNaN(num2)) {
        alert("Invalid input! Please enter a valid number.");
        return;
    }

    let i = 1;
    document.getElementById("show2").innerHTML = ""; 

    while (i <= num2) {
        document.getElementById("show2").innerHTML += i + ". " + txt2 + "<br>";
        i++;
    }
}

function clearFields2() {
    document.getElementById("show2").innerHTML = " ";
}

function show3() {
    const num3 = parseFloat(document.getElementById("num3").value);
    const txt3 = document.getElementById("txt3").value;

    if (isNaN(num3)) {
        alert("Invalid input! Please enter a valid number.");
        return;
    }

    let i = 1;
    document.getElementById("show3").innerHTML = ""; 

    do {
        document.getElementById("show3").innerHTML += i + ". " + txt3 + "<br>";
        i++;
    } while (i <= num3);
}

function clearFields3() {
    document.getElementById("show3").innerHTML = " ";
}