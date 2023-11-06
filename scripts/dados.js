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
