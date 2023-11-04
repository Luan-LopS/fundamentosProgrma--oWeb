document.addEventListener('DOMContentLoaded', function() {
    const meuFormulario = document.getElementById('meu-formulario');

    meuFormulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const fone = document.getElementById('fone').value;

        // Limpa os dados antigos do localStorage
        localStorage.removeItem('nome');
        localStorage.removeItem('email');
        localStorage.removeItem('fone');

        // Armazena os novos dados no localStorage
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('fone', fone);

        // Redireciona para formAction.html
        window.location.href = 'formAction.html';
    });
});

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