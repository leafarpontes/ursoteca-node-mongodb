const nomeLivroInput = document.getElementById('nomeLivro');
const nomeAutorInput = document.getElementById('nomeAutor');
const generoInput = document.getElementById('genero');
const editoraInput = document.getElementById('editora');
const qtdPagInput = document.getElementById('qtdPag');
const valorLivroInput = document.getElementById('valorLivro');
const codBarrasInput = document.getElementById('codBarras');

nomeLivroInput.addEventListener('keyup', validaTexto);
nomeAutorInput.addEventListener('keyup', validaTexto);
generoInput.addEventListener('keyup', validaTexto);
qtdPagInput.addEventListener('keyup', validaInteiro);
valorLivroInput.addEventListener('keyup', validaNumero);
codBarrasInput.addEventListener('keyup', validaVazio);
editoraInput.addEventListener('keyup', validaVazio);

function correctInput(x) {
    x.classList.add("correct");
    x.classList.remove("wrong");
}

function wrongInput(x) {
    x.classList.add("wrong");
    x.classList.remove("correct");
}

function validaTexto() {
    let letras = /^[A-Za-zÀ-ÿ\s]*$/;
    let nome = this.value;

    if (nome.match(letras) && nome != "") {
        correctInput(this);
    }
    else {
        wrongInput(this);
    }
}

function validaInteiro() {
    value = this.value;
    // o + antes do value converte o valor do input para número
    if (Number.isInteger(+value) && value > 0) {
        correctInput(this);
    }
    else {
        wrongInput(this);
    }
}

function validaNumero() {
    value = parseInt(this.value);
    if (!isNaN(value)) {
        correctInput(this);
    }
    else {
        wrongInput(this);
    }
}

function validaVazio() {
    value = this.value;
    if (value != "") {
        correctInput(this);
    }
    else {
        wrongInput(this);
    }
}

const inputs = document.getElementsByTagName('input');
const btnCadastrar = document.getElementsByClassName('btn-cadastrar')[0];
let nomeOk, autorOk, generoOk, editoraOk, paginasOk, valorOk, codBarrasOk;

$('#nomeLivro').focusout(function() {
    if ($(this).hasClass('correct')) {
        nomeOk = true;
    }
})

$('#nomeAutor').focusout(function() {
    if ($(this).hasClass('correct')) {
        autorOk = true;
    }
})

$('#genero').focusout(function() {
    if ($(this).hasClass('correct')) {
        generoOk = true;
    }
})

$('#editora').focusout(function() {
    if ($(this).hasClass('correct')) {
        editoraOk = true;
    }
})

$('#qtdPag').focusout(function() {
    if ($(this).hasClass('correct')) {
        paginasOk = true;
    }
})

$('#valorLivro').focusout(function() {
    if ($(this).hasClass('correct')) {
        valorOk = true;
    }
})

$('#codBarras').focusout(function() {
    if ($(this).hasClass('correct')) {
        codBarrasOk = true;
    }
})