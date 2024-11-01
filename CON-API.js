// Armazena chave que foi dada pelo site após criarmos uma conta
const apiKey = 'd5e06d9f3591549b1247ec72';

// Armazena URL que foi dada pelo site junto da chave anterior
 const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

 // Função para buscar taxa de câmbio da API


 // determina que é uma função assíncrona
 async function getExchangeRate (daMoeda, paraMoeda){
    try {
        const response = await fetch(`${apiUrl}${daMoeda}`); 
        const data = await response.json();


        // verifica se a consulta da API foi bem sucedida
        if(data.result === 'success'){ 
            
            return data.conversion_rates[paraMoeda];
        }
        
        else {
            throw new Error('Erro a buscar a taxa de câmbio');
        }


    }catch(error){
        console.error("Erro: ", error);
        return null;
    }
 }