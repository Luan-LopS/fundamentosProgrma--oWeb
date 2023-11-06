document.addEventListener('DOMContentLoaded', function() {
    const nomeRecebido = document.getElementById('nome-recebido');
    const emailRecebido = document.getElementById('email-recebido');
    const foneRecebido = document.getElementById('fone-recebido');

    // Recupera os dados do localStorage
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');
    const fone = localStorage.getItem('fone');

    // Exibe os dados na página
    if (nome) {
        nomeRecebido.innerHTML += nome;
        emailRecebido.innerHTML += email;
        foneRecebido.innerHTML += fone;
    }

});