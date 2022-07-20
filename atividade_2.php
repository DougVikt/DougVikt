<?php
/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
$a=2.9;
$g=3.3;
$litro=19;
if ($litro<=20){
    $preco=$a/100*3;# desconto
    $custo=$a-$preco;
    $custo_final=$custo*$litro;
}elseif ($litro>20) {
    $preco=$a/100*5;
    $custo=$preco-$a;
    $custo_final=$custo*$litro;
}
if ($litro<=20){
    $preco2=$g/100*4;# desconto
    $custo2=$g-$preco2;
    $custo_final2=$custo2*$litro;
}elseif ($litro>20) {
    $preco2=$g/100*6;
    $custo2=$preco2-$g;
    $custo_final2=$custo2*$litro;
}
echo "Posto Estrela\n\n Valor do Litro\n Álcool: R$ $a\n Gasolina: R$ $g\n\n";
echo "Você abasteceu $litro L de Gasolina. Irá pagar um total de R$ $custo_final2. Caso fosse Álcool, seria R$ $custo_final.";
