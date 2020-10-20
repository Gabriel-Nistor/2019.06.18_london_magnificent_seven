var kensalButton = document.getElementById("kensal-button");
var kensalBox = document.getElementById("kensal-box");

function showKensal(){
    if (kensalBox.className === "hide"){
        kensalBox.className = "info kensal";
    } else { 
        kensalBox.className = "hide"
    }
}

kensalButton.addEventListener("click", showKensal);

var bromptonButton = document.getElementById("brompton-button");
var bromptonBox = document.getElementById("brompton-box");

function showbrompton(){
    if (bromptonBox.className === "hide"){
        bromptonBox.className = "info brompton";
    } else { 
        bromptonBox.className = "hide"
    }
}

bromptonButton.addEventListener("click", showbrompton);

var highgateButton = document.getElementById("highgate-button");
var highgateBox = document.getElementById("highgate-box");

function showhighgate(){
    if (highgateBox.className === "hide"){
        highgateBox.className = "info highgate";
    } else { 
        highgateBox.className = "hide"
    }
}

highgateButton.addEventListener("click", showhighgate);

var abneyButton = document.getElementById("abney-button");
var abneyBox = document.getElementById("abney-box");

function showabney(){
    if (abneyBox.className === "hide"){
        abneyBox.className = "info abney";
    } else { 
        abneyBox.className = "hide"
    }
}

abneyButton.addEventListener("click", showabney);

var towerButton = document.getElementById("tower-button");
var towerBox = document.getElementById("tower-box");

function showtower(){
    if (towerBox.className === "hide"){
        towerBox.className = "info tower";
    } else { 
        towerBox.className = "hide"
    }
}

towerButton.addEventListener("click", showtower);

var nunheadButton = document.getElementById("nunhead-button");
var nunheadBox = document.getElementById("nunhead-box");

function shownunhead(){
    if (nunheadBox.className === "hide"){
        nunheadBox.className = "info nunhead";
    } else { 
        nunheadBox.className = "hide"
    }
}

nunheadButton.addEventListener("click", shownunhead);

var westButton = document.getElementById("west-button");
var westBox = document.getElementById("west-box");

function showwest(){
    if (westBox.className === "hide"){
        westBox.className = "info west";
    } else { 
        westBox.className = "hide"
    }
}

westButton.addEventListener("click", showwest);


