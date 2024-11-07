// Armazena a chave de API fornecida pelo site após criar uma conta
const apiKey = 'd5e06d9f3591549b1247ec72';
// Armazena a URL base da API, que também foi fornecida, incluindo a chave de API
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
// Função para buscar a taxa de câmbio entre duas moedas específicas
// É uma função assíncrona para lidar com a chamada à API, que pode demorar um tempo para responder
async function getExchangeRate(daMoeda, paraMoeda) {
    try {
        // Faz uma requisição HTTP para a API, incluindo o código da moeda de origem no final da URL
        const response = await fetch(`${apiUrl}${daMoeda}`);
        // Converte a resposta em JSON para obter os dados
        const data = await response.json();

        // Verifica se a consulta à API foi bem-sucedida, o que é indicado pelo campo "result" retornando "success"
        if (data.result === 'success') {
            // Retorna a taxa de conversão para a moeda de destino especificada
            return data.conversion_rates[paraMoeda];
        } else {
            // Lança um erro se a resposta não indicar sucesso
            throw new Error('Erro ao buscar a taxa de câmbio');
        }
    } catch (error) {
        // Captura e exibe o erro no console, e retorna null se ocorrer algum problema na chamada
        console.error("Erro: ", error);
        return null;
    }
}
// Adiciona um ouvinte de evento para o formulário com ID 'currency-form' que será executado quando o formulário for enviado (submit)
document.getElementById('currency-form').addEventListener('submit', async function(event) {
    // Evita o comportamento padrão de recarregar a página ao enviar o formulário
    event.preventDefault();
    // Captura o valor inserido pelo usuário no campo de valor, e converte para número
    const valor = parseFloat(document.getElementById('valor').value);
    // Captura o código da moeda de origem selecionada pelo usuário
    const daMoeda = document.getElementById('daMoeda').value;
    // Captura o código da moeda de destino selecionada pelo usuário
    const paraMoeda = document.getElementById('paraMoeda').value;
    // Chama a função para buscar a taxa de câmbio e armazena o valor retornado
    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);
    // Se a taxa de câmbio foi obtida com sucesso
    if (exchangeRate) {
        // Calcula o valor convertido multiplicando o valor inserido pela taxa de câmbio
        const convertedValue = valor * exchangeRate;
        // Exibe o resultado da conversão na página
        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`;
    } else {
        // Alerta o usuário em caso de erro na busca da taxa de câmbio
        alert('Erro ao buscar a cotação. Tente novamente');
    }
});
