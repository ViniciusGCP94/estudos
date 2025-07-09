// 1 - O sistema deve começar recebendo (valor devido) e o (número de dias) desde o vencimento
import entrada, { questionFloat } from 'readline-sync'
let valorDivida = parseFloat(entrada.question('Informe o valor devido : '));
let diasEmAtraso = parseInt(entrada.question('Informa quantos dias se desde o vencimento do boleto : '));
let juros = true
let calculoJuros = 0
/* 2 - O calculo só deve prosseguir se o valor da divida for maior que (zero), do contrário, a aplicação
deve (encerrar) com uma mensagem */
if (valorDivida > 0){

       if (diasEmAtraso > 0 && diasEmAtraso <= 15) {
              calculoJuros = 0.05;
       } else if (diasEmAtraso > 15) {
              calculoJuros = 0.10;
       } else {
       let juros = false
       console.log('Você não tem nenhuma divida');
       } 
/* 3 - O sistema deve ser capaz de aplicar uma (taxa de juros) diferente dependendo do (número de dias)
de atraso : */

//{Até 15 dias de atraso - 5% do valor da divida

//Mais de 15 dias de atraso - 10% do valor da divida}
       
 /*Os juros só contam após (1 dia) de atraso. Zero dias não deve haver aplicação de juros.*/
if (juros) {
        let taxaDeJuros = calculoJuros * 100; // Convertendo para porcentagem
        let valorTotal = valorDivida * (1 + calculoJuros);

 /* O sistema deve mostrar na tela as seguintes informações : */ 
       console.log('Valor original da dívida: R$', valorDivida.toFixed(2));
        console.log('Dias de atraso:', diasEmAtraso);
        console.log('Taxa de juros:', taxaDeJuros, '%');
        console.log('Valor total com juros: R$', valorTotal.toFixed(2));
    } else {
        console.log('Sua conta não está em atraso.');
    } 
}else {
    console.log('Você não tem nenhuma dívida.');
}
       //  {- Valor original da divida;
       
       //  - Dias de atraso;
      
       //  - Taxa de juros;
       
       //  - Valor total com juros.}


/* Aplicação de cálculo de juros

O objetivo da aplicação é calcular o valor total da dívida com juros com base nas informações fornecidas
 a ela.

Requisitos:

- O usuário da aplicação deve informar o valor da dívida e o número de dias que ela se encontra em atraso.
- O valor da dívida deve ser maior que zero, caso contrário, a aplicação deve informar ao usuário do 
problema e encerrar.
- O número de dias nos ajuda a determinar a taxa de juros.
- Dívidas com mais de 15 dias de atraso tem uma taxa de 10% de juros aplicada sobre o valor da dívida, 
já as dívidas com menos de 15 dias de atraso tem uma taxa de apenas 5% de juros sobre o valor da dívida.
- Os juros só devem ser aplicados, se houver ao menos um dia de atraso, do contrário, o usuário é 
considerado "em dia" e a aplicação deve ser encerrada com uma mensagem de aviso. */