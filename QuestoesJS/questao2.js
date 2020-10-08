function calcularAumento(){

    var nome = document.CalcularAumentoFuncionario.nomeFuncionario.value;
    var salarioAtual = document.CalcularAumentoFuncionario.salarioFuncionario.value;
    
    var SalarioComAumento = parseInt(salarioAtual * 0.1) + parseInt(salarioAtual);

    document.getElementById("resultado").innerHTML += "O novo Salario de " + nome + " é: " + SalarioComAumento + "\n";

}