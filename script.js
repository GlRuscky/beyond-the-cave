function toggleTema() {
    const body = document.body;
    const botao = document.getElementById("tema-btn");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        botao.textContent = "☀️";
        localStorage.setItem("tema", "light");
    } else {
        botao.textContent = "🌙";
        localStorage.setItem("tema", "dark");
    }
}

const ANO_LANCAMENTO = 2026;
let anoAtual = new Date().getFullYear();

if (anoAtual == ANO_LANCAMENTO) {
    alert("NOTÍCIA: Este jogo é um GRANDE LANÇAMENTO deste ano!");
}

let nomeVisitante = prompt("Bem-vindo ao site! Como gostaria de ser chamado?");
let idadeVisitante = prompt(`Olá, ${nomeVisitante}. Qual é a sua idade para acessar o conteúdo sensível?`);

const conteudo = document.querySelectorAll("main, #skills, #bloco3, .cards-container");

if (idadeVisitante >= 18) {
    alert(`Parabéns, ${nomeVisitante}! seu acesso foi liberado com sucesso.`);

    conteudo.forEach(el => {
        el.style.filter = "none";
    });

} else {
    alert(`Lamentamos, ${nomeVisitante}. por segurança, o conteúdo permanecerá borrado.`);

    conteudo.forEach(el => {
        el.style.filter = "blur(20px)";
    });
}

// =============================
// 🎮 DADOS DO JOGO (REGRAS DO TRABALHO)
// =============================

const desenvolvedora = "João Alfredo Studios";
const generoPrincipal = "Aventura / Plataforma 2D";
let plataforma = "PC (Web)";
const precoSugerido = "Gratuito (Demo)";
const classificacao = "14+";

// =============================
// 🧠 INJEÇÃO NO DOM
// =============================

document.getElementById("dev").innerHTML = `
    <h3>Desenvolvedora</h3>
    <p>${desenvolvedora}</p>
`;

document.getElementById("genre").innerHTML = `
    <h3>Gênero</h3>
    <p>${generoPrincipal}</p>
`;

document.getElementById("platform").innerHTML = `
    <h3>Plataforma</h3>
    <p>${plataforma}</p>
`;

document.getElementById("price").innerHTML = `
    <h3>Preço Sugerido</h3>
    <p>${precoSugerido}</p>
`;

document.getElementById("rating").innerHTML = `
    <h3>Classificação</h3>
    <p>${classificacao}</p>
`;
