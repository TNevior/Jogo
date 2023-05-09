let nomes = [];
let pontos = 0;
let rodadaAtual = 1;

const txtNomes = document.querySelector("#nomes");
const btn = document.querySelector("#iniciar");

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
  setTimeout(() => iniciarJogo(), 1000);
});

const iniciarJogo = () => {
  nomes = txtNomes.value.toLowerCase().split(" ");
  pontos = 0;
  rodadaAtual = 1;
  txtNomes.value = ""; 
  setTimeout(() => {
    alert("O jogo começou! Boa sorte.");
    jogarRodada();
  }, 1000);
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

btn.addEventListener("click", iniciarJogo);
