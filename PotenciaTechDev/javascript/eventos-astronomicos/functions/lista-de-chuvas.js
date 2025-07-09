// Importar a coleção de chuvas de meteoros
import colecaoChuvasDeMeteoros from '../data/chuva-de-meteoros.js';

// Selecionar o formulário e a lista de exibição
const formChuva = document.getElementById('form-chuva');
const listaChuvas = document.getElementById('lista-chuvas');

// Função para filtrar e exibir os dados
function filtrarChuvasPorData(inicio, fim) {
    // Limpar a lista atual
    listaChuvas.innerHTML = '';

    // Verificar se as datas estão no formato correto (DD/MM)
    if (!/^\d{2}\/\d{2}$/.test(inicio) || !/^\d{2}\/\d{2}$/.test(fim)) {
        listaChuvas.innerHTML = '<li>Por favor, insira as datas no formato DD/MM.</li>';
        return;
    }

    // Filtrar a coleção de chuvas com base nas datas de início e fim fornecidas
    const chuvasFiltradas = colecaoChuvasDeMeteoros.filter(chuva => {
        // Converter as datas para um formato comparável (YYYY/MM/DD)
        const dataInicioChuva = new Date(`2000/${chuva.inicio.split('/').reverse().join('-')}`);
        const dataFimChuva = new Date(`2000/${chuva.fim.split('/').reverse().join('-')}`);
        const dataInicioInput = new Date(`2000/${inicio.split('/').reverse().join('-')}`);
        const dataFimInput = new Date(`2000/${fim.split('/').reverse().join('-')}`);

        // Verificar se a chuva está no intervalo fornecido
        return dataInicioChuva >= dataInicioInput && dataFimChuva <= dataFimInput;
    });

    // Adicionar as chuvas filtradas à lista
    chuvasFiltradas.forEach(chuva => {
        const listItem = document.createElement('li');
        listItem.textContent = `${chuva.nome}: de ${chuva.inicio} até ${chuva.fim} (Pico: ${chuva.pico}, Intensidade: ${chuva.intensidade})`;
        listaChuvas.appendChild(listItem);
    });

    // Mostrar uma mensagem se nenhuma chuva foi encontrada
    if (chuvasFiltradas.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'Nenhuma chuva encontrada para o intervalo fornecido.';
        listaChuvas.appendChild(listItem);
    }
}

// Capturar o evento de envio do formulário
formChuva.addEventListener('submit', event => {
    event.preventDefault(); // Evitar o envio padrão do formulário

    // Obter os valores do formulário
    const inicio = document.getElementById('inicio').value;
    const fim = document.getElementById('fim').value;

    // Filtrar e exibir as chuvas de meteoros
    filtrarChuvasPorData(inicio, fim);
});
