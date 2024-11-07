# Conversor de Moedas com consulta de API
    Essa aplicação é uma melhoria do primeiro código de conversor de moedas, pois ele não possui a necessidade de colocarmos ou mudarmos os valores das cotações das moedas, pois isso é feito automaticamente pela API que foi adicionada a essa aplicação.

## Funcionalidades

- Conversão de valores entre moedas utilizando taxas de câmbio atualizadas.
- Interface simples que permite ao usuário inserir o valor e selecionar as moedas de origem e destino.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter:

- Conta e chave de API no [ExchangeRate-API](https://www.exchangerate-api.com/).
- Um ambiente que suporte HTML, CSS e JavaScript para visualização do projeto (como um navegador web).
# Imagem do projeto 

![Alt text](<img/Captura de tela 2024-11-07 100005.png>)
-------------------------------------------------------------------------------------------------------------------------------------------

# Estrutura do Código
## O código está dividido em três partes principais:

* Configuração da API: Armazena a chave de API e URL base.

* Função de Obtenção da Taxa de Câmbio:
Função assíncrona getExchangeRate() que faz a requisição à API para obter a taxa de câmbio entre duas moedas.

* Manipulação do Formulário:

* Escutador de eventos que capta o envio do formulário, realiza a conversão e exibe o resultado na página.

## Uso
* No formulário, insira o valor que deseja converter.
* Selecione a moeda de origem e a moeda de destino.
* Clique no botão de conversão para visualizar o valor convertido.
## Exemplo de Uso
Suponha que você deseja converter 100 USD para EUR. Insira "100" no campo de valor, selecione "USD" como moeda de origem e "EUR" como moeda de destino. O resultado da conversão será exibido na tela.

## Tecnologias Utilizadas
* HTML
* CSS
* JavaScript
