// 1 - O sistema deve começar recebendo (valor devido) e o (número de dias) desde o vencimento
import entrada from 'readline-sync'

console.log('Aplicação de taxa de Juros :')
let juros
let valorDivida = entrada.question('\nInforme o valor devido : ');

if (valorDivida > 0 ) {
       let diasEmAtraso = entrada.question('Informa quantos dias se passaram desde o vencimento do boleto : ');
       if (diasEmAtraso > 0) {
              if (diasEmAtraso > 15) {
                     juros = 10;
              } else {
                     juros = 5
              }
              valorDivida = Number(valorDivida);
              diasEmAtraso = Number(diasEmAtraso);

              let taxaDeJuros = (valorDivida/100) * juros;
              let totalDivida = valorDivida + taxaDeJuros;

              //  - Valor original da divida;
              console.log('\nValor original da dívida : R$ '+valorDivida)
              //  - Dias de atraso;
              console.log('Dias atrasado : '+diasEmAtraso)
              //  - Taxa de juros;
              console.log('Taxa de juros : '+juros+'%')
              //  - Valor total com juros.}
              console.log('Valor total com juros : R$ '+totalDivida)

       } else {
              console.log('Você está com a conta em dia!')
              }
} else {
       console.log('O valor da dívida deve ser maior que zero!')
}
