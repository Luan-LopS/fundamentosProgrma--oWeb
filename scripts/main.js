// Adiciona manipuladores de eventos aos botões
//document.getElementById('menu-button').addEventListener('click', toggleMenu);
//document.getElementById('popup-button').addEventListener('click', abrirPopup);
//document.getElementById('validar-button').addEventListener('click', validarCampo);
document.getElementById('alterar-estilo-button').addEventListener('click', alterarEstilo);



// Função para mostrar/ocultar um menu de navegação
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('ativo');
}

// Função para abrir uma janela pop-up
function abrirPopup() {
    const popup = window.open('', 'popup', 'width=300,height=200');
    popup.document.write('<h1>Isso é uma janela pop-up</h1>');
}

// Função para validar um campo de entrada
function validarCampo() {
    const campo = document.getElementById('campo');
    const valor = campo.value.trim();

    if (valor === '') {
        campo.classList.add('campo-invalido');
        alert('Campo não pode ser vazio');
    } else {
        campo.classList.remove('campo-invalido');
        alert('Campo válido: ' + valor);
    }
}

// Função para alterar o estilo de um elemento HTML
function alterarEstilo() {
    const elemento = document.getElementById('elemento');
    elemento.style.color = 'red';
    elemento.style.fontWeight = 'bold';
}

