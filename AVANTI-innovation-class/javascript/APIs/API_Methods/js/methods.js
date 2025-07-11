// REQUISIÇÃO GET

/* fetch('https://jsonplaceholder.typicode.com/posts') // Faz uma requisição para a API para obter posts
    .then((response) => response.json()) // Converte a resposta da API em formato JSON
    .then((posts) => { // Quando a conversão estiver completa, executa a função com os dados dos posts
        console.log(posts); // Exibe os dados dos posts no console

        const container = document.getElementById('container'); // Obtém o elemento com o ID 'container' do DOM
        posts.map( post => { // Itera sobre cada post recebido
            console.log(post.title); // Exibe cada post no console

            const h2 = document.createElement('h2'); // Cria um novo elemento <h2>
            h2.textContent = post.title ; // Conteúdo do <h2> = título de cada post
            container.appendChild(h2); // Adiciona o elemento <h2> ao contêiner
        })
    })*/

 
// REQUISIÇÃO POST     

/*fetch('https://jsonplaceholder.typicode.com/posts', { // Faz uma requisição para a API para criar um novo post
    method: 'POST', // Define o método da requisição como POST
    body: JSON.stringify({ // Converte o objeto em uma string JSON para enviar no corpo da requisição
        title: 'foo', // Define o título do post
        body: 'bar', // Define o corpo do post
        userId: 1, // Define o ID do usuário associado ao post
    }),
    headers: { // Define os cabeçalhos da requisição
        'Content-type': 'application/json; charset=UTF-8', // Especifica o tipo de conteúdo como JSON
    },
})
    .then((response) => response.json()) // Converte a resposta da API em formato JSON
    .then((json) => console.log(json)); // Exibe o objeto JSON retornado no console*/


// REQUISIÇÃO PUT

/*fetch('https://jsonplaceholder.typicode.com/posts/1', { // Faz uma requisição para a API para atualizar o post com ID 1
    method: 'PUT', // Define o método da requisição como PUT
    body: JSON.stringify({ // Converte o objeto em uma string JSON para enviar no corpo da requisição
        id: 1, // Define o ID do post a ser atualizado
        title: 'bali', // Define o novo título do post
        body: 'bar', // Define o novo corpo do post
        userId: 1, // Define o ID do usuário associado ao post
    }),
    headers: { // Define os cabeçalhos da requisição
        'Content-type': 'application/json; charset=UTF-8', // Especifica o tipo de conteúdo como JSON
    },
})
    .then((response) => response.json()) // Converte a resposta da API em formato JSON
    .then((json) => console.log(json)); // Exibe o objeto JSON retornado no console*/


// REQUISIÇÃO PATCH

/*fetch('https://jsonplaceholder.typicode.com/posts/1', { // Faz uma requisição para a API para atualizar o post com ID 1
    method: 'PATCH', // Define o método da requisição como PATCH
    body: JSON.stringify({ // Converte o objeto em uma string JSON para enviar no corpo da requisição
        title: 'foo', // Define o novo título do post
    }),
    headers: { // Define os cabeçalhos da requisição
        'Content-type': 'application/json; charset=UTF-8', // Especifica o tipo de conteúdo como JSON
    },
})
    .then((response) => response.json()) // Converte a resposta da API em formato JSON
    .then((json) => console.log(json)); // Exibe o objeto JSON retornado no console*/

// REQUISIÇÃO DELETE

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});

