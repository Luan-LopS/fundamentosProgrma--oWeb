// criando opções de produtos com js



function mostraProdutos(){
    let fantasia = document.getElementById('fantasia')
    let decoracao = document.getElementById('decoracao')
    let comida = document.getElementById('comida')
    
    let ordem = document.getElementsByClassName('ordem')[0]
    let ordem1 = document.getElementsByClassName('ordem')[1]
    let ordem2 = document.getElementsByClassName('ordem')[2]

    fantasia.addEventListener('click', ()=>{
        if (ordem.style.display === 'flex') {
            ordem.style.display = 'none'
        } else {
            ordem.style.display = 'flex'
        }
    })
    
    decoracao.addEventListener('click', ()=>{
        if (ordem1.style.display === 'flex') {
            ordem1.style.display = 'none'
        } else {
            ordem1.style.display = 'flex'
        }
    })
    
    comida.addEventListener('click', ()=>{
        if (ordem2.style.display === 'flex') {
            ordem2.style.display = 'none'
        } else {
            ordem2.style.display = 'flex'
        }
    })
    
}

mostraProdutos()


//validação de campos de cadastro
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

document.getElementById('validar-button').addEventListener('click', validarCampo);
validarCampo()
