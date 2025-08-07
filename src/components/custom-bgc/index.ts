export function initBgc(){
  if(!customElements.get('custom-bgc')){
    class Background extends HTMLElement{
      constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.render();
      }
      render(){
        const style = 
        `<style>
:host {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url('webb-dark.png');
  background-size: cover;
  background-position: center;
  display: block;
}

      </style>`

        this.shadowRoot!.innerHTML = style 
      }
    }
    customElements.define('custom-bgc', Background)
  }
}