// criando opções de produtos com js
function mostraProdutos(){
    let produtos = document.getElementsByClassName('produtos')[0]
    let fantasia = document.getElementById('fantasia')
    let decoracao = document.getElementById('decoracao')
    let comida = document.getElementById('comida')
    
    let ordem = document.getElementsByClassName('ordem')[0]
    let ordem1 = document.getElementsByClassName('ordem')[1]
    let ordem2 = document.getElementsByClassName('ordem')[2]

    fantasia.addEventListener('click', ()=>{
        if (ordem.style.display === 'flex') {
            ordem.style.display = 'none'
            produtos.style.height = '200px'
            fantasia.style.background =''

            
        } else {
            ordem.style.display = 'flex'
            ordem1.style.display = 'none'
            ordem2.style.display = 'none'
            produtos.style.height = '400px'
            fantasia.style.background ='red'
            ordem.style.background = 'red'
            decoracao.style.background =''
            comida.style.background = ''

        }
    })
    
    decoracao.addEventListener('click', ()=>{
        if (ordem1.style.display === 'flex') {
            ordem1.style.display = 'none'
            produtos.style.height = '200px'
            decoracao.style.background =''


        } else {
            ordem1.style.display = 'flex'
            ordem.style.display = 'none'
            ordem2.style.display = 'none'
            produtos.style.height = '400px'
            decoracao.style.background ='blue'
            ordem1.style.background = 'blue'
            fantasia.style.background =''
            comida.style.background = ''

        }
    })
    
    comida.addEventListener('click', ()=>{
        if (ordem2.style.display === 'flex') {
            ordem2.style.display = 'none'
            produtos.style.height = '200px'
            comida.style.background = ''

        } else {
            ordem2.style.display = 'flex'
            ordem1.style.display = 'none'
            ordem.style.display = 'none'
            produtos.style.height = '400px'
            ordem2.style.background = 'yellow'
            comida.style.background = 'yellow'
            fantasia.style.background =''
            decoracao.style.background =''

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
