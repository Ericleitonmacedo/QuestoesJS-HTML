function calcularAB(){
    var A = document.calculo.valorA.value;
    var B = document.calculo.valorB.value;

    if( A == B){
        valor = parseInt(A) + parseInt(B);
        document.getElementById("resultado").innerHTML += "O Resultado é: " + valor + "\n"; 
    }else{
        var C = parseInt(A) * parseInt(B);
        document.getElementById("resultado").innerHTML += "A variavel C é: " + C + "\n"; 
    }
}