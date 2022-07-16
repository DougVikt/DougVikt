<?php
# idade em anos para dias 
$idade=30;
$mes=$idade*12;
$dia=$mes*30;
echo "são $dia dias de vida\n";
      echo "\n \n \n";
# porcentagem de votos de acordo com os eleitores
$eleitores=32900;
$votos_brancos=6876;
$votos_validos=18323;
$votos_nulos=7701;
$por_brancos=($votos_brancos/$eleitores)*100;
$por_validos=($votos_validos/$eleitores)*100;
$por_nulos=($votos_nulos/$eleitores)*100;
echo "total de eleitores $eleitores ;\nvotos em branco :$votos_brancos ;\nvotos validos :$votos_validos ;\nvotos nulos :$votos_nulos ;\n";
echo ceil($por_brancos)." % votos brancos\n".ceil($por_validos)." % votos validos\n".ceil($por_nulos)." % votos nulos";
    echo "\n \n \n";
# salario com reajuste
$salario=4000;
$reajuste=($salario/100)*5;
$novo_salario=$salario+$reajuste;
echo "\nseu salario é de R$ $salario,00 que teve um reajuste de 5% , salario final é de R$ $novo_salario,00";
    echo "\n \n \n";
# custo de compra de carro 
$fabrica=30000;
$destribuidor=($fabrica/100)*28;
$imposto=($fabrica/100)*45;
$preco_final=$fabrica+$imposto+$destribuidor;
echo "o preço de fabrica : $fabrica\ncusto de 28% da destribuidora : $destribuidor\ncusto do imposto de 45% : $imposto\npreço final da compra : $preco_final";
     echo "\n \n \n";
# salario de funcionario , loja de carros 
$salario=1300;
$carros_vendidos=12;
# gacho da pergunta anterior
$preco_carro=51900;
$valor_total_das_vedas=$preco_carro*$carros_vendidos;
$bonus_de_vedas=($valor_total_das_vedas/100)*5;
$bonus_por_carro=($salario/100)*5;
$salario_final=$salario+($bonus_por_carro*$carros_vendidos)+$bonus_de_vedas;
echo "relatorio do funcionario cloclo :\nsalario fixo : R$ $salario,00\nnumero de carros vendidos : $carros_vendidos\nbonus de 5% por carro vendido : R$ $bonus_por_carro,00
valor total das vendas : R$ $valor_total_das_vedas,00\nbonus de 5% referente ao valor das vendas : R$ $bonus_de_vedas,00\n\ntotal final : R$$salario_final,00 ";
     echo("\n \n \n");
# saber se o numero e negativo ou positivo
$valor=-34;
echo "voce colocou o valor $valor ";
if ($valor>0){
    echo ", ele é positivo !";
}
else{
    echo ", ele é negativo !";
}
      echo "\n \n \n ";
# se pode ou não votar
$data=2022;
$ano_de_nascida=1998;
$idade=$data-$ano_de_nascida;
echo "pela sua idade de $idade anos , você ";
if ($idade<16){
    echo "não pode votar";
}
elseif ($idade>=16 and $idade<18 or $idade>65) {
    echo "tem voto facultativo";
}
else {
    echo "tem voto obrigatorio";
}