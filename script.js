'use strict';

// Elementos (Sempre bom colocar aqui para não repetir o código)
const playerAtivo1 = document.querySelector('.player--1');
const playerAtivo2 = document.querySelector('.player--2');
const score1 = document.querySelector('#score--1');
const score2 = document.querySelector('#score--2');
const player1 = document.getElementById('current--1');
const player2 = document.getElementById('current--2');
const dado = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Pontuação inicial
score1.textContent = 0;
score2.textContent = 0;
dado.classList.add('hidden');
let pontuação = 0;
let jogadorAtual = 1;
const pontuacoes = [0, 0];

//Rolagem do dado
btnRoll.addEventListener('click', function () {
  // 1. D6 Aleatório
  let diceRoll = Math.trunc(Math.random() * 6) + 1;

  // 2. Renderização do Dado (Manipular o src)
  dado.classList.remove('hidden');
  dado.src = `dice-${diceRoll}.png`; //concatenar para renderizar dinamicamente a imagem do dado

  // 3. Checar a rolagem
  if (diceRoll !== 1) {
    // add a pontuação para o player
    pontuação += diceRoll;
    document.getElementById(`current--${jogadorAtual}`).textContent = pontuação; //troca dinamicamente de player
  } else {
    // se rolou 1 trocar de player
    document.getElementById(`current--${jogadorAtual}`).textContent = 0; //para deixar a pontuação zerada quando trocar de player
    pontuação = 0;
    jogadorAtual = jogadorAtual === 1 ? 2 : 1; //um if else (memorizar, sempre esqueço desse ternario)
    [playerAtivo1, playerAtivo2].forEach(css =>
      css.classList.toggle('player--active')
    ); //mesma coisa q o código abaixo

    /*playerAtivo1.classList.toggle('player--active');
      playerAtivo2.classList.toggle('player--active');*/
  }
});

//Manter Pontuação
btnHold.addEventListener('click', function () {
  // 1-Adicionar a pontuação temporária para a total
  // 2-Checar se a pontuação é >= 100
  // 2.1-Terminar o game
  // 3-Trocar de Player
});

//Resetar o Game
btnNew.addEventListener('click', function () {
  // 1.Zerar todos os pontos
  // 2.Setar o Player 1 como jogador inicial
});
