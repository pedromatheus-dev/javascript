// Adicionando classes com JS

const c1 = [...document.getElementsByClassName('c1')]
const c2 = [...document.getElementsByClassName('c2')]
const colecao = [...document.getElementsByClassName('curso')]

c1.map((e, i) => {
    e.classList.add('destaque')
})

c2.map((e, i) => {
    e.classList.add('destaque')
})

colecao.map((e, i) => {
    e.classList.add('destaque')
})

