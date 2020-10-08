function CalcularValores(){

    primValor = document.operacoes.valor1.value;
    segValor = document.operacoes.valor2.value;

    switch(document.operacoes.codigo.value){
        case "1":
            soma = parseInt(primValor) + parseInt(segValor);
            document.getElementById("resultado").innerHTML += "O valor da soma entre os dois valores é :" + soma;
            break;
        case "2":
            multiplicacao = parseInt(primValor) * parseInt(segValor);
            document.getElementById("resultado").innerHTML += "O valor da multiplicação entre os dois valores é :"
             + multiplicacao;
            break;
        case "3":
            divisao = parseInt(primValor) / parseInt(segValor);
            document.getElementById("resultado").innerHTML += 
            "O valor da divisão entre o primeiro valor pelo segundo valor é :" + divisao;
            break; 

    }
}