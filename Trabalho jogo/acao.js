let nomes = [];
let pontos = 0;
let rodadaAtual = 1;

const txtNomes = document.querySelector("#nomes");
const btn = document.querySelector("#iniciar");

var temporizador = document.getElementById("temporizador");

var tempo = 30;

function atualizar() {

  temporizador.innerHTML = tempo;

  tempo--;

  if (tempo < 0) {
    window.location.reload();
    tempo = 30;
  }
}

var intervalo = setInterval(atualizar, 1000);

const verificarResposta = (respostaEsperada, respostaUsuario) => {
  if (respostaEsperada.toLowerCase() === respostaUsuario.toLowerCase()) {
    pontos++;
    alert("Resposta correta! Você ganhou 1 ponto.");
  } else {
    if (pontos > 0) {
      pontos--;
    } else {
      pontos = 0;
    }
    alert("Resposta incorreta! Você perdeu 1 ponto.");
  }
};

btn.addEventListener("click", () => {
  limparCaixa();
  setTimeout(() => iniciarJogo(), 400);
});

const iniciarJogo = () => {
  const nomesInput = txtNomes.value.trim();
  const nomesArray = nomesInput.split(" ");
  
  if (nomesArray.length < 5) {
    alert("Insira pelo menos 5 nomes para iniciar o jogo.");
    return;
  }
  
  nomes = nomesArray.map(nome => nome.toLowerCase());
  pontos = 0;
  rodadaAtual = 1;
  txtNomes.value = "";
  
  setTimeout(() => {
    alert("O jogo começou! Boa sorte.");
    jogarRodada();
  }, 400);
};

const jogarRodada = () => {
  if (rodadaAtual > 5) {
    alert("Fim do jogo! Sua pontuação final é " + pontos);
    return;
  }

  const nomeEsperado = nomes[rodadaAtual - 1];
  const respostaUsuario = prompt(`Digite o ${rodadaAtual}º nome da lista:`);
  verificarResposta(nomeEsperado, respostaUsuario);
  rodadaAtual++;
  jogarRodada();
};

btn.addEventListener("click", () => {
  limparCaixa();
  iniciarJogo();
});

btn.addEventListener("click", iniciarJogo);
