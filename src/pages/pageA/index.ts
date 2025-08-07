import { initButton } from "../../components/custom-button";
import { CustomButtonElement } from "../../components/custom-button";
export function initPageA({ goTo }) {
  const h1 = document.querySelector('h1');
  h1!.textContent = `Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.`;
  h1!.style.textAlign = 'center';
  h1!.style.color = '#000';
  h1!.style.fontWeight = '100';
  h1!.style.fontSize= '50px'
  

  initButton({ goTo });
  // Busca el botón existente en el DOM
  let button = document.querySelector('custom-button') as CustomButtonElement ;
    button.setAttribute('text', '¡Jugar!'); // Cambia el texto del botón existente
    button.setRoute('/Empieza');



}