function calcularMediaAluno(){

    var nome = document.aprovacao.nomeAluno.value;
    var nota1 = document.aprovacao.nota1.value;
    var nota2 = document.aprovacao.nota2.value;
    var nota3 = document.aprovacao.nota3.value;

    var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

    if(media >= 8){
        document.getElementById("resultado").innerHTML += "A media de " + nome + " é: " + media + 
        " e ele(a) está aprovado na disciplina!"; 
    }else{
        document.getElementById("resultado").innerHTML += "A media de " + nome + " é: " + media + 
        " e ele(a) está reprovado na disciplina!"; 
    }

}