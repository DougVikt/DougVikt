<?php
/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/

$gasolina=7;
$distancia=85;
$distancia_total=$distancia*2;
$litros=$distancia_total/12;
$gasto=$litros*$gasolina;
echo "Eles precisarão de " . ceil ($litros) . "L para cumprir a missão.\n";
echo "No total, eles terão um gasto de R$" . ceil ($gasto) . ",00.";