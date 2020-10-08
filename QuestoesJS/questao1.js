
function mediaAritmetica(){
    var nota1 = document.CalculoMediaAritmetica.n1.value;
    var nota2 = document.CalculoMediaAritmetica.n2.value;
    var nota3 = document.CalculoMediaAritmetica.n3.value;
    var notaTotal = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
    var media = notaTotal / 3;

    
    document.getElementById("resultado").innerHTML += "A media é: " + media + "\n";
    
}
