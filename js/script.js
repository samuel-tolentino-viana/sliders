const btnNext = document.querySelector('.next');
const btnBack = document.querySelector('.back');

const container = document.querySelector('.container');
const lista = document.querySelector('.container .lista');
const thumb = document.querySelector('.container .thumb');

btnNext.onclick = () => {
    moverItens('next');
};

btnBack.onclick = () => {
    moverItens('back')
};

function moverItens(type) {

    let itensThumb = document.querySelectorAll('.thumb .thumb-itens');

    let itensList = document.querySelectorAll('.container .list-itens');

    if (type === 'next') {
        lista.appendChild(itensList[0]); // APENDCHILD COLOCA NO INÍCIO DA LISTA
        thumb.appendChild(itensThumb[0]);
        container.classList.add('next');
    } else {
        lista.prepend(itensList[itensList.length - 1]); // PREPEND COLOCA NO FINAL DA LISTA
        thumb.prepend(itensThumb[itensThumb.length - 1]);
        container.classList.add('back');
    }

    setTimeout(() => {
        container.classList.remove('next', 'back');
    }, 3000);

};