var jogadores = [
  {
    nome: "Amanda",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
  },
  {
    nome: "David",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  },
  {
    nome: "Cinthia",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  },
  {
    nome: "Wendy",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
]

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
  var html = ""
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td></>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button>"
    html += "<button onClick='adicionarEmpate(" + i + ")'>Empate</button>"
    html += "<button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    html += "</tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}