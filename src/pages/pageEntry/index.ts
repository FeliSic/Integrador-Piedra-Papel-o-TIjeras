
import { initButton } from "../../components/custom-button"
import { initCustomHands } from "../../components/custom-hands"
import { initStar } from "../../components/custom-star"
export function initPageEntryPoint({ goTo }){
  const contenedor = document.createElement('div')
contenedor.style.display = 'flex';
contenedor.style.flexDirection = 'column';
contenedor.style.alignItems = 'center'; // Centra horizontalmente
contenedor.style.justifyContent = 'space-between'; // Centra horizontalmente
contenedor.style.position = 'fixed';
contenedor.style.width = '100vw'; // Para que ocupe todo el ancho

//initStar()
//const estrella = document.createElement('custom-star')
//contenedor.appendChild(estrella)


  const h1 = document.createElement('h1')
  h1.textContent = "PIEDRA PAPEL O TIJERA"
  h1.style.fontFamily = 'Odibee Sans'
  h1.style.color = '#428F6A'
  h1.style.fontSize= '70px'
  h1.style.textAlign= 'center'
  h1.style.width= '350px'
  
  contenedor.appendChild(h1)
  

  const button = document.createElement('custom-button')
  button.setAttribute('text', 'Empezar')
  initButton({ goTo });
  button.style.setProperty('--button-bg-color', '#006CFC')
  button.style.setProperty('--button-width', '320px')
  button.style.setProperty('--button-border', '10px solid #001997')
  button.style.setProperty('--button-border-radius', '10px')
  button.style.setProperty('--button-fontSize', '30px')
  button.style.setProperty('--button-color', '#fff')
  button.style.color = '#fff'
  contenedor.appendChild(button)
  

  initCustomHands()
  const customHands = document.createElement('custom-hands')
  contenedor.appendChild(customHands)
  
  return contenedor
}

