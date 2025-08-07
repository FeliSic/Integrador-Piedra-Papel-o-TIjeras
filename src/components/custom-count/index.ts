
export function initCount(){
  if(!customElements.get('custom-count')){
    class Count extends HTMLElement{
      constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.render();
      }
      render(){
        const style = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
        div {
        display: flex;
        justify-content: center; /* Centra horizontalmente */
        margin-top:20px;
        align-items: start;     /* Centra verticalmente */
        }
          path {
        stroke-dasharray: 700; /* Longitud total del trazo */
        stroke-dashoffset: 0;  /* Cuánto del trazo está oculto */
        transition: stroke-dashoffset 1s linear; /* Transición suave 
        }
        
        </style>
        
        
        
        `
        this.shadowRoot!.innerHTML = style + `<div><svg width="244" height="243" viewBox="0 0 244 243" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text id="counter" x="121" y="165" font-size="120" font-family="Odibee Sans" text-anchor="middle" fill="black">3</text>
<circle cx="121.5" cy="121.5" r="110" stroke="black" stroke-width="23"/>
  <path id="countdown-path" d="M232 122C232 182.199 182.751 231 122 231C61.2487 231 27 186.5 19 160.5" stroke="#F1F1F1" stroke-width="23"/>
</svg></div>
`;
      }
        updateCount(count: number, pathD: string) {
    const counterText = this.shadowRoot!.getElementById('counter');
    const patternPath = this.shadowRoot!.querySelector('path');
    if (counterText) counterText.textContent = count.toString();
    if (patternPath) patternPath.setAttribute('d', pathD);
  }
}
    
    customElements.define('custom-count', Count);
  }
}