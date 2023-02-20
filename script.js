//Para cada metro quadrado, multiplica-se por 600 BTUs;

//Cada pessoa adicional soma 600 BTUs (a primeira pessoa não é contabilizada);

//Cada equipamento eletrônico soma 600 BTUs.

// variaveis


const metros = document.getElementById("metros");
const pessoas = document.getElementById("pessoas");
const eletro = document.getElementById("eletro")
const opS = document.getElementById("sim")
const opN = document.getElementById("nao")

function exibirMensagemErro(mensagem){
    Swal.fire({
        icon: 'error',
        title: 'Opsss...',
        text: mensagem
      });
}

function exibirResultado(resultado){
    Swal.fire({
        icon: 'success',
        title: 'Calculo efetuado...',
        text: resultado
      });
}

function calcular(){
     // Calculo feito sem exposição ao sol
    if(opN.checked){
        const calcMetros = Number(metros.value * 600)
        const calcPessoas = Number((pessoas.value - 1) * 600)
        const calcEletro = Number(eletro.value * 600)
        

        if(isNaN(calcMetros) || isNaN(calcPessoas) || isNaN(calcEletro)){
            }else if(calcMetros <= 0 || calcEletro <= 0 ||  calcPessoas < 0){
                exibirMensagemErro("[ERROR] Por favor insira um valor para afetuar o calculo!")
            }else{
                const calculoTotal = calcMetros + calcPessoas + calcEletro
                exibirResultado(calculoTotal + " BTUs ")
            }
    }
     else if(opS.checked){
        // Calculo feito com exposição ao sol
        const calcMetros = Number(metros.value * 600)
        const calcPessoas = Number((pessoas.value - 1) * 600)
        const calcEletro = Number(eletro.value * 600)
        

        if(isNaN(calcMetros) || isNaN(calcPessoas) || isNaN(calcEletro)){
            }else if(calcMetros <= 0 || calcEletro <= 0 ||  calcPessoas < 0){
                exibirMensagemErro(["[ERROR] Por favor insira um valor para afetuar o calculo!"])
            }else{
                const calculoTotal =  calcMetros + calcPessoas + calcEletro + 800 
                exibirResultado(calculoTotal + " BTUs ")
            }
           
    }

}

function limparCampos(){
    inputs.forEach(input=>{
        input.value = "";
    })
}

const inputs = [metros,pessoas,eletro];
limparCampos(inputs);