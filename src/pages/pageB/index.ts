import { initCount } from "../../components/custom-count";
import { initStar } from "../../components/custom-star";
import { state } from "../../state"
export function initPageB() {
  const contenedor = document.querySelector('div');
  const h1 = document.querySelector('h1')
  h1!.remove()
  const button = document.querySelector('custom-button')
  button?.remove()

const hands = document.querySelector('custom-hands') as any;
if (hands) {
  hands.setScale(2.0);
  hands.setGap('65px')
}

  const customElement = document.querySelector('custom-hands')
  console.log(customElement);
  const shadowRoot = customElement?.shadowRoot;
  console.log(shadowRoot);
  const manos = shadowRoot!.querySelectorAll('.manos') as any
  console.log(manos);
  

// -- Counter section --

  const counter = document.createElement('custom-count') as any
  contenedor!.appendChild(counter)
  let countdown;
  initCount()
  counterDown()
  function counterDown(){

    const dashOffsets = [400, 600, 700, 1000]; // índices 0 a 3
    let count = 3;
    const path = counter.shadowRoot!.getElementById('countdown-path');
  
  
    countdown = setInterval(() => {
      if (count >= 0) {
        const counterText = counter.shadowRoot!.getElementById('counter');
        if (counterText) counterText.textContent = count.toString();
  
        if (path) {
          const index = 3 - count;
          path.style.strokeDashoffset = dashOffsets[index].toString();
        }
        count--;
      } else {
        clearInterval(countdown);
        resetCounter();
      }
    }, 1000);
  }

  function resetCounter(){
    console.log('Reiniciando contador...');
    counterDown()
  }


// -------------------

// -- Hands Section --


function chooseRandomHand(){
  const scale = 2.0
  const randomIndex = Math.floor(Math.random() * manos.length);
  const randomHand = manos[randomIndex];
  const choice = randomHand.getAttribute('data-choice');
  console.log('Mano aleatoria elegida!', choice);

 // Crear un nuevo elemento para mostrar la mano de la compu
  const computerDiv = document.createElement('div')
  computerDiv.style.display = 'flex'
  computerDiv.style.position = 'fixed'
  computerDiv.style.width = '100vw'
  computerDiv.style.flexDirection = 'column'
  computerDiv.style.alignItems = 'center'
  computerDiv.style.justifyContent = 'center'
  const computerHandElement = randomHand.cloneNode(true); // Clonar el SVG o elemento
  computerHandElement.style.transform =  `scale(${scale}) rotate(180deg)`
  computerHandElement.style.opacity = '1'; // Centrar horizontalmente
  computerHandElement.style.zIndex = '10'; // Asegurarte de que esté encima
  // Agregarlo al contenedor
  computerDiv.appendChild(computerHandElement);
  contenedor!.appendChild(computerDiv);


  return choice
}



  manos.forEach(mano => {
  mano.addEventListener('click', () => {
    clearInterval(countdown)
    counter.remove()
    console.log('¡Clic detectado dentro del Shadow DOM!');
    
    manos.forEach( m =>{
    (m as HTMLElement).style.opacity = '0.1';
    (mano as  HTMLElement).style.opacity = '1'

    
  })
  const playerChoice = mano.getAttribute('data-choice');
  console.log(`Elegiste: ${playerChoice}`);
  
  const computerChoice = chooseRandomHand();
  console.log(`La compu eligió: ${computerChoice}`);
  
  const winner = determineWinner(playerChoice, computerChoice)

    if (winner !== "empate") {
      showResult(winner);
    } else {
      console.log('Ocurrió un Empate, Elige otra vez');
    }
  });
});



function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'empate';
  } else if (
    (playerChoice === 'piedra' && computerChoice === 'tijeras') ||
    (playerChoice === 'tijeras' && computerChoice === 'papel') ||
    (playerChoice === 'papel' && computerChoice === 'piedra')
  ) {
    return 'jugador';
  } else {
    return 'computadora';
  }
}

function showResult(winner) {
  initStar()

  setTimeout(() => {
  const resultElement = document.createElement('custom-star');
  const buttonElement = resultElement.shadowRoot?.getElementById('boton')
  buttonElement?.addEventListener('click', ()=>{
    location.reload()
  })
    const playerScoreDiv = resultElement.shadowRoot?.getElementById('player')
  const playerScoreElement = playerScoreDiv?.getElementsByClassName('playerScore')[0];
  console.log(playerScoreElement);
  
  const computerScoreDiv = resultElement.shadowRoot?.getElementById('computer')
  const computerScoreElement = computerScoreDiv?.getElementsByClassName('computerScore')[0];
  console.log(computerScoreElement);
  
  let playerScore = state.data.Points.player || 0;
  let computerScore = state.data.Points.computer || 0;


  if (winner === 'jugador') {
    resultElement.style.setProperty('--star-color', '#61a770ff'); 
    resultElement.style.setProperty('--background-color', 'rgba(0, 255, 0, 0.5)');
    playerScore++;
  } else {
    resultElement.style.setProperty('--star-color', '#a76161ff'); 
    resultElement.style.setProperty('--background-color', 'rgba(255, 0, 0, 0.5)');
    computerScore++
  }

const textElement = resultElement.shadowRoot?.querySelector('svg text');
if (textElement) {
  textElement.textContent = winner === 'jugador' ? 'Ganaste' : 'Perdiste';
}


state.setState({
    Points: {
      player: playerScore,
      computer: computerScore,
    },
  });



  localStorage.setItem('Puntos', JSON.stringify(state.data.Points));

if (playerScoreElement) {
  playerScoreElement.textContent = playerScore;
}
if (computerScoreElement) {
  computerScoreElement.textContent = computerScore;
}

  contenedor?.appendChild(resultElement);
  console.log('Resultado mostrado', resultElement); // Verifica que se muestre
  }, 1000); // 2 segundos de delay
}



// -------------------
}
