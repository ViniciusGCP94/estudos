import entradaDados from 'readline-sync';

let salarioMinimo = [
    {Ano: 2010, Salario: 510.00},
    {Ano: 2011, Salario: 545.00},
    {Ano: 2012, Salario: 622.00},
    {Ano: 2013, Salario: 678.00},
    {Ano: 2014, Salario: 724.00},
    {Ano: 2015, Salario: 788.00},
    {Ano: 2016, Salario: 880.00},
    {Ano: 2017, Salario: 937.00},
    {Ano: 2018, Salario: 954.00},
    {Ano: 2019, Salario: 998.00},
    {Ano: 2020, Salario: 1045.00},
    ];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];


console.log("Escolha uma das alternativas:\n")
console.log("1 - Listar os salários mínimos de 2010 a 2020");
console.log("2 - Listar o indice de IPCA (inflação) de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let opcao = entradaDados.question("Digite o número de sua escolha: ");
opcao = Number(opcao);

let anoLabel = "Ano: ";
let salarioLabel = "Salário mínimo: ";
let crescimentoLabel = "Crescimento Salarial: ";
let ipcaLabel = "Inflação IPCA: ";

anoLabel = anoLabel.padEnd(30,'.');
salarioLabel = salarioLabel.padEnd(30,'.');
crescimentoLabel = crescimentoLabel.padEnd(30,'.');
ipcaLabel = ipcaLabel.padEnd(30,'.');


switch(opcao)
{
    case 1:
        for(let i = 0; i <= salarioMinimo.length-1; i++)
        {
            let ano = salarioMinimo[i].Ano;
            let salario = salarioMinimo[i].Salario;

            let salarioFormatado = salario.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(salarioLabel+"R$ "+salarioFormatado);
        }
        break;
    case 2:
        for(let i = 0; i <= inflacao.length-1; i++)
        {
            let ano = inflacao[i].ano;
            let ipca = inflacao[i].ipca;

            let ipcaFormatado = ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(ipcaLabel+ipcaFormatado+"%");
        }
        break;
    case 3:
        for(let i = 0; i <= salarioMinimo.length-1; i++)
        {
            let ano = salarioMinimo[i].Ano;
            let salario = salarioMinimo[i].Salario;
            let percentualCrescimento;
            let crescimentoFormatado;

            if(i > 0)
            {
                let salarioAnterior = salarioMinimo[i-1].Salario;
                let diferenca = salario - salarioAnterior;

                percentualCrescimento = (diferenca / salarioAnterior) * 100;

                crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".",",")+"%";
            }
            else
            {
                crescimentoFormatado = "-";
            }

            let ipca = inflacao[i].ipca;

            let salarioFormatado = salario.toFixed(2).replace(".",",");
            let ipcaFormatado = ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(salarioLabel+"R$ "+salarioFormatado);
            console.log(crescimentoLabel+crescimentoFormatado);
            console.log(ipcaLabel+ipcaFormatado+"%");
        }
        break;
    default:
        console.log("Opção Inválida!");
        break;
};