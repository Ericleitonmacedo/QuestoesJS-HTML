function calcularPagamento(){

    var precoProduto = document.Parcelamento.valorProduto.value;

    switch(document.Parcelamento.QuantidadeDeParcelas.value){
        case "1":
            var valorAVista = parseInt(precoProduto) - parseInt(precoProduto * 0.1);
            document.getElementById("resultado").innerHTML += "Pagando À vista obteve um desconto de 10%! Total a pagar: R$" + 
            valorAVista;
            break;
        case "2":
            var pagamento3X = (parseInt(precoProduto) * 0.1) + parseInt(precoProduto);
            var parcelas3X = pagamento3X / 3;
            document.getElementById("resultado").innerHTML += "O valor total dividido em 3x fica: R$" + pagamento3X +
            " e o valor de cada parcela fica R$" + parcelas3X;
            break;
        case "3":
            var pagamento5X = (parseInt(precoProduto) * 0.2) + parseInt(precoProduto);
            var parcelas5X = pagamento5X / 5;
            document.getElementById("resultado").innerHTML += "O valor total dividido em 5x fica: R$" + pagamento5X +
            " e o valor de cada parcela fica R$" + parcelas5X;
            break; 
    }

}