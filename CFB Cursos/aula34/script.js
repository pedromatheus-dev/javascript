// Exemplo de evento de clique em elementos da DOM

const colecao = [...document.getElementsByClassName('curso')]

colecao.map((el) => {
    el.addEventListener('click', (evt) => {
        const elementoClicado = evt.target
        elementoClicado.classList.add('destaque')
        console.log(`Elemento clicado: ${elementoClicado.innerHTML}`)
    })
})

