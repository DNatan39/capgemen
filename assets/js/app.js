// La fonction eval() permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.

var result = document.getElementById('output');
var caracteres = document.querySelectorAll('.caractere');
var supp = document.querySelectorAll('.supp');
var opperateur = document.querySelectorAll('.opperateur');
var egal = document.querySelector('.egal');

caracteres.textContent = result.innerHTML;

for (let i = 0; i < caracteres.length; i++) {
    
    caracteres[i].addEventListener("click", function () {
        result += caracteres.textContent;
        document.getElementById('output').innerHTML = caracteres[i].textContent;
    })
}

for (let i = 0; i < supp.length; i++) {

    supp[i].addEventListener("click", function(){
        if (this.textContent === "AC"){
            document.getElementById('output').innerHTML = "0";
        }
        else{
            document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.slice(0, -1);
        }
    })
}

for (let i = 0; i < opperateur.length; i++) {
    opperateur[i].addEventListener("click", function(){
        if (this.textContent === "/"){
            result.innerHTML += "/";
        }
        else if (this.textContent === "*"){
            result.innerHTML += "*";
        }
        else if (this.textContent === "-"){
            result.innerHTML += "-";
        }
        else if (this.textContent === "+"){
            result.innerHTML += "+";
        }
        document.getElementById('output').innerHTML = opperateur[i].textContent;
    })
}

for (let i = 0; i < egal.length; i++) {
    egal.addEventListener("click", function(){
        document.querySelector('.egal').innerHTML = eval(caracteres[i].textContent);
        document.getElementById("output").innerHTML = egal[i].textContent;
    })
}








// background Sakura
function rain() {
    let amount = 50;
    let body = document.querySelector('body');
    let i = 0;
    while (i < amount) {
        let drop = document.createElement('i');

        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;


        drop.style.width = 100 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';
        body.appendChild(drop);
        i++
    }
}

rain();