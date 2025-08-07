export interface CustomButtonElement extends HTMLElement {
  setRoute(newRoute: string): void;

}

export function initButton({ goTo }){
  if(!customElements.get('custom-button')){
    class Button extends HTMLElement{
       static get observedAttributes() {
    return ['text'];
  }
      text:string
      route:string
      constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.text = this.getAttribute('text') || 'Default Text';
        this.route = '/Reglas'; // Ruta por defecto
        this.render();
      }

        attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'text' && oldValue !== newValue) {
      this.text = newValue;
      this.render();
    }
  }

   setRoute(newRoute) {
    this.route = newRoute; // Cambia la ruta
  }
      render(){
        console.log('renderizando boton');
        
        const style = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
        button{
        font-family:'Odibee Sans', sans-serif;
        width: var(--button-width, 150px);
        padding: 15px;
        background-color: var(--button-bg-color, #002b5d);
        border: var(--button-border, 0px solid transparent);
        font-size: var(--button-fontSize, 16px);
        color: var(--button-color, #fff);
        border-radius: var(--button-border-radius, 0px);
        }
        </style>
        `

        this.shadowRoot!.innerHTML = style + `<button id="state_butt">${this.text}</button>`;
        const button = this.shadowRoot!.getElementById('state_butt')
        button?.addEventListener('click', (e)=>{
          console.log("botón clickeado");
          goTo(this.route)
        })
        
      }
    }
    customElements.define('custom-button', Button);
}

}