//Para cada metro quadrado, multiplica-se por 600 BTUs;

//Cada pessoa adicional soma 600 BTUs (a primeira pessoa não é contabilizada);

//Cada equipamento eletrônico soma 600 BTUs.

// variaveis


let metros = document.getElementById("metros");
let pessoas = document.getElementById("pessoas");
let eletro = document.getElementById("eletro")
let res = document.getElementsByClassName("resultado")[0];

//função

function calcular(){


    let calcMetros = Number(metros.value * 600)
    let calcPessoas = Number((pessoas.value - 1) * 600)
    let calcEletro = Number(eletro.value * 600)
    let calculoTotal = calcMetros + calcPessoas + calcEletro
    if(calcMetros <= 0 || calcEletro <= 0 ||  calcEletro <= 0){
        alert("[ERROR] Por favor insira um valor para afetuar o calculo!")
    }else{
        res.innerHTML = calculoTotal + " BTUs "
    }
    
}