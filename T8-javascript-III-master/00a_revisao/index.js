// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()


console.log('olá');

// const body = document.querySelector('body');

const body = document.body;

console.log(body);

body.style.backgroundColor = 'purple';

// const n = Math.random();
// const n2 = n * 255;
// const int = parseInt(n2);


// console.log(n);
// console.log(n2);
// console.log(int);


// const botao = document.getElementById("trocaCor");
// console.log(botao);
// botao.addEventListener("click", clicouBotao);

// function clicouBotao() {
//     const r = parseInt(Math.random () * 255);
//     const g = parseInt(Math.random () * 255);
//     const b = parseInt(Math.random () * 255);

//     body.style.backgroundColor = "rgb("+r+ "," +g+ "," +b+")";
// }


//ou


// const botao = document.getElementById("trocaCor");
// console.log(botao);
// botao.addEventListener("click", clicouBotao);

// function clicouBotao() {
//     const n = Math.random();
//     const n1 = n * 255;
//     const r = parseInt(n1);

//     const nr = Math.random();
//     const n2 = nr * 255;
//     const g = parseInt(n2);

//     const nn = Math.random();
//     const n3 = nn * 255;
//     const b = parseInt(n3);

//     console.log('entrei na função');

//     body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b+')'
//     console.log(r,g,b);
  
    
// }


//ou

const botao = document.getElementById("trocaCor");
console.log(botao);
botao.addEventListener("click", clicouBotao);

function geraInteiro() {
    const n = parseInt(Math.random() * 255);
    console.log(n);
    return n;
}


function clicouBotao() {
    const r = geraInteiro();
    const g = geraInteiro();
    const b = geraInteiro();
    console.log(r, g, b);

    body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b+')'

}

// ------------------------------------------------------------------------
// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string

