function fetchGithubUser(username) { //ViniciusGCP94
    //fetch('URL_DA_API')
    fetch(`https://api.github.com/users/${username}`) // URL da API do Github - Template String
        //.then(response => console.log(response)) // Exibe a resposta no console
        .then((response) => {
            if (!response.ok) {
                console.error(error)
            }
            
            return response.json() // Converte a resposta em JSON
            
        })
        .then((user) => {
            console.log('user' , user) // Exibe o usuário no console
            createUserCard(user) // Chama a função para criar o card do usuário
        })
        .catch((error) => {
            console.error(error) // Exibe o erro no console
            const app = document.getElementById('#app') // Seleciona o elemento com o ID 'app'
            app.innerHTML = `<p style= 'color:red'> >Erro: ${error.message} </p>`
        })
}

 // função para criar o card do usuário

function createUserCard(user) {
    const app = document.getElementById('app') // Seleciona o elemento com o ID 'app'
    
    const card = document.createElement('div') // Cria um elemento div para o card
    card.className = 'card' // Adiciona a classe 'card' ao elemento div

    const avatar = document.createElement('img') // Cria um elemento img para o avatar
    avatar.src = user.avatar_url // Define a URL do avatar
    avatar.alt = `${user.login} Avatar` // Define o texto alternativo do avatar

    const name = document.createElement('h2') // Cria um elemento h2 para o nome
    name.textContent = user.name // Define o texto do nome 

    const login = document.createElement('p') // Cria um elemento p para o login
    login.textContent = `Login: @${user.login}` // Define o texto do login

    card.appendChild(avatar) // Adiciona o avatar ao card
    card.appendChild(name) // Adiciona o nome ao card
    card.appendChild(login) // Adiciona o login ao card

    app.appendChild(card) // Adiciona o card ao elemento com o ID 'app'
}

fetchGithubUser('ViniciusGCP94')