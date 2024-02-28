document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginStatus = document.getElementById('login-status');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Carrega o arquivo users.json
        fetch('users.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar arquivo de usuários.');
                }
                return response.json();
            })
            .then(users => {
                // Verifica se o usuário e senha estão corretos
                const foundUser = users.find(user => user.username === username && user.password === password);
                if (foundUser) {
                    loginStatus.textContent = 'Login bem-sucedido!';
                    // Redireciona para a página principal
                    setTimeout(function() {
                        window.location.href = 'index.html'; // Redireciona apenas se o login for bem-sucedido
                    }, 1000);
                } else {
                    loginStatus.textContent = 'Nome de usuário ou senha incorretos.';
                }
            })
            .catch(error => {
                console.error('Erro:', error.message);
                loginStatus.textContent = 'Erro 
