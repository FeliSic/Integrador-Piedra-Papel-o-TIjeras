function t({goTo:t}){if(!customElements.get("custom-button")){class e extends HTMLElement{static get observedAttributes(){return["text"]}constructor(){super(),this.attachShadow({mode:"open"}),this.text=this.getAttribute("text")||"Default Text",this.route="/Reglas",this.render()}attributeChangedCallback(t,e,o){"text"===t&&e!==o&&(this.text=o,this.render())}setRoute(t){this.route=t}render(){console.log("renderizando boton");let e=`
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
        `;this.shadowRoot.innerHTML=e+`<button id="state_butt">${this.text}</button>`;let o=this.shadowRoot.getElementById("state_butt");o?.addEventListener("click",e=>{console.log("botón clickeado"),t(this.route)})}}customElements.define("custom-button",e)}}const e={data:{Points:JSON.parse(localStorage.getItem("Puntos")||"{}")},listeners:[],getState(){return this.data},setState(t){this.data=t,this.listeners.forEach(t=>t(this.data))},subscribe(t){this.listeners.push(t)}},o=[{path:/\//,component:function({goTo:e}){let o=document.createElement("div");o.style.display="flex",o.style.flexDirection="column",o.style.alignItems="center",o.style.justifyContent="space-between",o.style.position="fixed",o.style.width="100vw";let s=document.createElement("h1");s.textContent="PIEDRA PAPEL O TIJERA",s.style.fontFamily="Odibee Sans",s.style.color="#428F6A",s.style.fontSize="70px",s.style.textAlign="center",s.style.width="350px",o.appendChild(s);let n=document.createElement("custom-button");if(n.setAttribute("text","Empezar"),t({goTo:e}),n.style.setProperty("--button-bg-color","#006CFC"),n.style.setProperty("--button-width","320px"),n.style.setProperty("--button-border","10px solid #001997"),n.style.setProperty("--button-border-radius","10px"),n.style.setProperty("--button-fontSize","30px"),n.style.setProperty("--button-color","#fff"),n.style.color="#fff",o.appendChild(n),!customElements.get("custom-hands")){class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){console.log("Renderizando Hands");let t=`
        <svg class ='manos' data-choice="tijeras" width="55" height="126" viewBox="0 0 55 126" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.6709 122.642V78.5304C47.9936 76.5152 51.7793 71.3729 51.7793 65.344V41.364H2.53577V65.344C2.53577 71.3729 6.32146 76.5152 11.6442 78.5304V122.642H42.6709Z" fill="#FFCAB9"/>
          <path d="M30.979 44.0623C28.1093 44.5915 25.3538 42.6942 24.8243 39.8245L19.0984 8.77745C18.5693 5.90774 20.4665 3.15224 23.3362 2.62277C26.206 2.09363 28.9615 3.99089 29.4909 6.86059L35.2168 37.9077C35.7463 40.7777 33.8487 43.5332 30.979 44.0623Z" fill="#FABBA7"/>
          <path d="M37.1086 43.6116C34.3011 42.8149 32.6714 39.8931 33.4679 37.0859L42.0868 6.71461C42.8835 3.90742 45.8053 2.27744 48.6125 3.07384C51.4197 3.87059 53.0496 6.79233 52.2532 9.59953L43.6343 39.9708C42.8379 42.7784 39.9162 44.4083 37.1086 43.6116Z" fill="#FABBA7"/>
          <path d="M7.8197 46.8791C4.90134 46.8791 2.53577 44.5136 2.53577 41.5952V36.5566C2.53577 33.6382 4.90134 31.2726 7.8197 31.2726C10.7381 31.2726 13.1036 33.6382 13.1036 36.5566V41.5952C13.1036 44.5136 10.7381 46.8791 7.8197 46.8791Z" fill="#FABBA7"/>
          <path d="M18.3876 46.8791C15.4692 46.8791 13.1036 44.5136 13.1036 41.5952V30.8124C13.1036 27.8941 15.4692 25.5285 18.3876 25.5285C21.3059 25.5285 23.6715 27.8941 23.6715 30.8124V41.5952C23.6715 44.5136 21.3059 46.8791 18.3876 46.8791Z" fill="#FABBA7"/>
          <path d="M51.7798 65.3441V41.5952C51.7798 38.6768 49.4143 36.3112 46.4959 36.3112H28.9553C26.037 36.3112 23.6714 38.6768 23.6714 41.5952C23.6714 44.5135 26.037 46.8791 28.9553 46.8791H41.212V54.7884C36.3169 55.695 31.474 60.3129 31.474 66.7981" fill="#FFCAB9"/>
          <path d="M42.6709 102.481C41.271 102.481 40.1367 103.616 40.1367 105.015V122.642C40.253 125.998 45.0902 125.995 45.2051 122.642V105.015C45.2051 103.616 44.0708 102.481 42.6709 102.481Z" fill="black"/>
          <path d="M49.3043 0.636231C45.2284 -0.520699 40.7929 1.99015 39.6491 6.02285L34.9606 22.5446L31.9835 6.40129C31.2016 2.1618 27.1142 -0.652139 22.877 0.130749C18.6375 0.912624 15.825 4.9977 16.6065 9.23719L19.1505 23.0325C15.2796 22.6558 11.4723 25.4724 10.7181 29.2983C5.75688 27.201 -0.112237 31.1395 0.00163135 36.5572V65.3443C0.00163135 71.6148 3.59743 77.3687 9.11009 80.1766V122.642C9.11009 124.042 10.2444 125.177 11.6443 125.177C13.0441 125.177 14.1784 124.042 14.1784 122.642V78.5304C14.1784 77.4768 13.5266 76.5335 12.5414 76.1604C8.07244 74.4686 5.06996 70.1217 5.06996 65.3439V48.9128C7.72712 49.9774 11.1033 49.2783 13.1036 47.3514C15.9564 50.0802 20.819 50.0795 23.6711 47.3514C25.0635 48.6306 26.9195 49.4135 28.955 49.4135H38.6774V52.8674C33.6472 54.7052 28.9394 59.7634 28.9394 66.7982C28.9394 68.1977 30.0737 69.3324 31.4736 69.3324C32.8735 69.3324 34.0078 68.1977 34.0078 66.7982C34.0078 61.5383 37.957 57.9685 41.6734 57.2802C42.8746 57.0579 43.746 56.0101 43.746 54.7883V46.879C43.746 45.4795 42.6118 44.3448 41.2119 44.3448H28.9553C25.3179 44.2097 25.3088 38.9842 28.9553 38.8454C34.8021 38.8454 40.649 38.846 46.4958 38.8454C48.0119 38.8454 49.2455 40.0786 49.2455 41.5951V65.3439C49.2455 70.1217 46.2427 74.4683 41.7741 76.1604C40.7888 76.5335 40.1371 77.4768 40.1371 78.5304V91.9503C40.1371 93.3498 41.2714 94.4845 42.6712 94.4845C44.0711 94.4845 45.2054 93.3498 45.2054 91.9503V80.1762C50.718 77.3684 54.3139 71.6145 54.3139 65.3439V41.5951C54.3139 37.7935 51.5861 34.619 47.9855 33.9213L54.6913 10.2914C55.8678 6.14382 53.4516 1.81242 49.3043 0.636231ZM7.8197 44.3448C6.30359 44.3448 5.06996 43.1115 5.06996 41.5951V41.364V36.5565C5.2085 32.9127 10.4322 32.9157 10.5694 36.5565V41.5951C10.5698 43.1115 9.33581 44.3448 7.8197 44.3448ZM21.1372 41.5951C21.0004 45.2352 15.7766 45.2396 15.6381 41.5951V36.5565V30.8124C15.7746 27.1727 20.9987 27.1679 21.1372 30.8124V41.5951ZM26.2056 34.2778V30.8127C26.2056 29.2568 25.7467 27.8069 24.9601 26.5874L21.591 8.31813C21.316 6.82703 22.305 5.39033 23.7961 5.11529C25.2872 4.84058 26.7239 5.82958 26.9989 7.32068L31.878 33.7774H28.9553C27.9879 33.777 27.0614 33.9548 26.2056 34.2778ZM49.8155 8.90775L42.7581 33.777H37.041L44.5249 7.40617C45.1338 5.83668 46.2657 5.20516 47.921 5.51197C49.3793 5.92554 50.2295 7.44908 49.8155 8.90775Z" fill="black"/>
        </svg>
        `,e=`
        <svg class ='manos' data-choice="piedra" width="56" height="125" viewBox="0 0 56 125" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.6595 122.21V55.7423C48.9823 53.7271 52.768 48.5848 52.768 42.5558V18.5759H3.52478V42.5558C3.52478 48.5848 7.31049 53.7271 12.6332 55.7423V122.21H43.6595Z" fill="#FFCAB9"/>
<path d="M8.80835 24.091C5.88999 24.091 3.52441 21.7254 3.52441 18.807V13.7684C3.52441 10.8501 5.88999 8.4845 8.80835 8.4845C11.7267 8.4845 14.0923 10.8501 14.0923 13.7684V18.807C14.0923 21.7254 11.7267 24.091 8.80835 24.091Z" fill="#FABBA7"/>
<path d="M19.3762 24.091C16.4579 24.091 14.0923 21.7255 14.0923 18.8071V8.02435C14.0923 5.10599 16.4579 2.74042 19.3762 2.74042C22.2946 2.74042 24.6602 5.10599 24.6602 8.02435V18.8071C24.6602 21.7255 22.2946 24.091 19.3762 24.091Z" fill="#FABBA7"/>
<path d="M29.944 24.091C27.0256 24.091 24.66 21.7255 24.66 18.8071V8.02435C24.66 5.10599 27.0256 2.74042 29.944 2.74042C32.8623 2.74042 35.2279 5.10599 35.2279 8.02435V18.8071C35.2279 21.7255 32.862 24.091 29.944 24.091Z" fill="#FABBA7"/>
<path d="M40.5118 24.091C37.5935 24.091 35.2279 21.7255 35.2279 18.8071V8.02435C35.2279 5.10599 37.5935 2.74042 40.5118 2.74042C43.4302 2.74042 45.7958 5.10599 45.7958 8.02435V18.8071C45.7958 21.7255 43.4299 24.091 40.5118 24.091Z" fill="#FABBA7"/>
<path d="M52.7685 42.556V18.807C52.7685 15.8886 50.4029 13.5231 47.4845 13.5231H29.944C27.0256 13.5231 24.66 15.8886 24.66 18.807C24.66 21.7254 27.0256 24.0909 29.944 24.0909H42.2006V32.0003C37.3056 32.9068 32.4626 37.5248 32.4626 44.0099" fill="#FFCAB9"/>
<path d="M48.3295 11.0352V8.02423C48.3518 1.2445 40.1344 -2.30705 35.2279 2.2683C32.3748 -0.460488 27.5125 -0.459812 24.6604 2.2683C20.2321 -1.86847 12.832 0.595079 11.7068 6.50982C6.74557 4.41255 0.876777 8.3513 0.990645 13.7687V42.5558C0.990645 48.8263 4.58646 54.5802 10.0991 57.3881L10.9962 121.176C10.9962 122.576 12.1305 123.71 13.5304 123.71C14.9302 123.71 16.0645 122.576 16.0645 121.176L15.1674 55.7422C15.1674 54.6887 14.5157 53.7453 13.5304 53.3723C9.06146 51.6805 6.05898 47.3335 6.05898 42.5558V26.1246C8.71613 27.1889 12.092 26.4905 14.0923 24.5632C16.9454 27.292 21.808 27.2917 24.6601 24.5632C26.0525 25.8425 27.9082 26.6253 29.944 26.6253H39.6661V30.0792C34.6362 31.917 29.9284 36.9752 29.9284 44.01C29.9284 45.4096 31.0627 46.5442 32.4626 46.5442C33.8625 46.5442 34.9968 45.4096 34.9968 44.01C34.9968 38.7501 38.946 35.1803 42.6621 34.4921C43.8633 34.2694 44.7347 33.2219 44.7347 32.0001V24.0908C44.7347 22.6913 43.6004 21.5567 42.2006 21.5567H29.944C28.4279 21.5567 27.1942 20.323 27.1942 18.8069C27.1942 17.2908 28.4275 16.0572 29.944 16.0572H47.4845C49.0006 16.0572 50.2342 17.2905 50.2342 18.8069V42.5558C50.2342 47.3335 47.2314 51.6801 42.7628 53.3723C41.7775 53.7453 41.1257 54.6887 41.1257 55.7422L42.0228 121.176C42.0228 122.576 43.1571 123.71 44.557 123.71C45.9569 123.71 47.0912 122.576 47.0912 121.176L46.1941 57.3881C51.7067 54.5802 55.3025 48.8263 55.3025 42.5558V18.8069C55.3025 14.7817 52.2443 11.4582 48.3295 11.0352ZM40.5115 5.2745C42.0276 5.2745 43.2612 6.50779 43.2612 8.02423V10.9889H37.7621V8.02423C37.7621 6.50813 38.9953 5.2745 40.5115 5.2745ZM8.80837 21.5567C7.29227 21.5567 6.05864 20.3234 6.05864 18.8069V18.5758V13.7683C6.19717 10.1245 11.4206 10.1276 11.5578 13.7683V18.8069C11.5581 20.3234 10.3248 21.5567 8.80837 21.5567ZM19.3765 21.5567C17.8604 21.5567 16.6264 20.3234 16.6264 18.8069V13.7683V8.02423C16.765 4.38078 21.9887 4.38315 22.1259 8.02423V18.8069C22.1259 20.3234 20.8926 21.5567 19.3765 21.5567ZM27.1942 11.4896V8.02456C27.3328 4.38077 32.5562 4.38381 32.6934 8.02456V10.9892H29.9436C28.9766 10.9889 28.0501 11.1666 27.1942 11.4896Z" fill="black"/>
</svg>

        
        
        `,o=`
        <svg class ='manos' data-choice="papel"  width="68" height="129" viewBox="0 0 68 129" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M61.5873 36.0851C58.9206 34.8994 55.7979 36.0999 54.6122 38.7662L47.4855 55.267H45.795V44.7157V41.8427V15.4103C45.795 12.4923 43.4295 10.1264 40.5111 10.1264C37.5928 10.1264 35.2272 12.492 35.2272 15.4103V7.99502C35.2272 5.07702 32.8617 2.71112 29.9433 2.71112C27.0253 2.71112 24.6594 5.07668 24.6594 7.99502V15.4103C24.6594 12.4923 22.2939 10.1264 19.3755 10.1264C16.4572 10.1264 14.0916 12.492 14.0916 15.4103V27.9122C14.0916 24.9942 11.7261 22.6283 8.80771 22.6283C5.8897 22.6283 3.5238 24.9939 3.5238 27.9122V41.8427V42.0738V65.8226C3.5238 71.8516 7.30951 76.9939 12.6326 79.0091V123.71H43.6589V79.0088C47.6152 77.5109 50.7208 74.2847 52.0554 70.252L52.0916 70.2574L57.141 59.0872L64.2677 43.0598C65.4541 40.3935 64.2535 37.2707 61.5873 36.0851Z" fill="#FFCAB9"/>
          <path d="M21.712 15.4103C21.712 13.9905 22.275 12.7045 23.1859 11.755C22.7632 11.3144 22.2648 10.9495 21.712 10.6761V15.4103Z" fill="#FABBA7"/>
          <path d="M13.5301 76.6388C9.0608 74.947 6.05832 70.6 6.05832 65.8226V59.1388C6.05832 55.8623 0.98999 55.8623 0.98999 59.1388V65.8226C0.98999 72.0931 4.5858 77.8471 10.0988 80.6546V124.71C10.0988 126.11 11.2331 127.244 12.633 127.244C14.0328 127.244 15.1671 126.11 15.1671 124.71V79.0087C15.1671 77.9555 14.5153 77.0118 13.5301 76.6388Z" fill="black"/>
          <path d="M66.7376 38.108C65.9885 36.1587 64.5248 34.6179 62.6171 33.7695C58.7243 32.0392 53.9935 33.9212 52.2858 37.7613L48.3294 46.9218V15.4103C48.4369 10.0582 42.7104 6.12481 37.7616 8.09166C37.1599 -2.42141 22.5499 -2.41228 22.1258 8.09166C17.1761 6.12616 11.4513 10.0578 11.5584 15.4107V20.5939C6.61201 18.6287 0.881082 22.5594 0.990558 27.9125V46.468C0.990558 49.7445 6.05889 49.7445 6.05889 46.468V27.9122C6.20013 24.2661 11.4205 24.2728 11.5584 27.9122V45.5365C11.5584 48.813 16.6267 48.813 16.6267 45.5365C16.6267 35.4944 16.6267 25.4524 16.6267 15.4103C16.7622 11.7736 21.9863 11.7628 22.1258 15.4103V40.0539C22.1258 43.3304 27.1942 43.3304 27.1942 40.0539V7.99503C27.1942 6.47892 28.4275 5.24529 29.9439 5.24529C31.4604 5.24529 32.6936 6.47858 32.6936 7.99503V40.0539C32.6936 43.3304 37.762 43.3304 37.762 40.0539V15.4103C37.762 13.8942 38.9956 12.6606 40.512 12.6606C42.0285 12.6606 43.2618 13.8939 43.2618 15.4103V52.7943C35.7816 53.463 29.9287 59.7518 29.9287 67.2769C29.9287 70.5534 34.997 70.5534 34.997 67.2769C34.997 60.1721 41.4298 57.5504 47.4864 57.8015C48.4974 57.8015 49.412 57.2004 49.8131 56.2722L56.9291 39.7961C57.7535 38.329 58.9635 37.8637 60.5583 38.4009C62.0258 39.2254 62.491 40.4354 61.9538 42.0305C57.9569 51.0194 49.7026 69.4168 49.7026 69.4168C48.5342 72.7365 45.9399 75.4366 42.7631 76.6391C41.7778 77.0122 41.126 77.9555 41.126 79.0091V123.71C41.126 125.11 42.2603 126.244 43.6602 126.244C45.06 126.244 46.1943 125.11 46.1943 123.71V80.6505C49.9611 78.7144 52.9758 75.293 54.4452 71.2059C58.5249 62.1815 62.5606 53.139 66.5846 44.0896C67.4323 42.1816 67.4871 40.0573 66.7376 38.108Z" fill="black"/>
        </svg>
        `,s=`
        <style>
    .hands-container {
    display: flex;
    gap: 40px;
    padding: 0;
    margin: -5px;
    position: fixed;  
    bottom: 0;
    left: 0;
    right: 0;        
    justify-content: center;
    align-items: center;
    }
        </style> `;this.shadowRoot.innerHTML=s+`
        <div class="hands-container">
        ${t}
        ${e}
        ${o}
        </div>
        `}setScale(t){this.shadowRoot.querySelectorAll("svg").forEach(e=>{e.style.transform=`scale(${t})`,e.style.transformOrigin="center"})}setGap(t){let e=this.shadowRoot.querySelector(".hands-container");e&&(e.style.gap=t)}}customElements.define("custom-hands",t)}let l=document.createElement("custom-hands");return o.appendChild(l),o}},{path:/\/Reglas/,component:function({goTo:e}){let o=document.querySelector("h1");o.textContent=`Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.`,o.style.textAlign="center",o.style.color="#000",o.style.fontWeight="100",o.style.fontSize="50px",t({goTo:e});let s=document.querySelector("custom-button");s.setAttribute("text","¡Jugar!"),s.setRoute("/Empieza")}},{path:/\/Empieza/,component:function(){let t,o=document.querySelector("div");document.querySelector("h1").remove();let s=document.querySelector("custom-button");s?.remove();let n=document.querySelector("custom-hands");n&&(n.setScale(2),n.setGap("65px"));let l=document.querySelector("custom-hands");console.log(l);let a=l?.shadowRoot;console.log(a);let r=a.querySelectorAll(".manos");console.log(r);let i=document.createElement("custom-count");if(o.appendChild(i),!customElements.get("custom-count")){class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){let t=`
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
        stroke-dashoffset: 0;  /* Cu\xe1nto del trazo est\xe1 oculto */
        transition: stroke-dashoffset 1s linear; /* Transici\xf3n suave 
        }
        
        </style>
        
        
        
        `;this.shadowRoot.innerHTML=t+`<div><svg width="244" height="243" viewBox="0 0 244 243" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text id="counter" x="121" y="165" font-size="120" font-family="Odibee Sans" text-anchor="middle" fill="black">3</text>
<circle cx="121.5" cy="121.5" r="110" stroke="black" stroke-width="23"/>
  <path id="countdown-path" d="M232 122C232 182.199 182.751 231 122 231C61.2487 231 27 186.5 19 160.5" stroke="#F1F1F1" stroke-width="23"/>
</svg></div>
`}updateCount(t,e){let o=this.shadowRoot.getElementById("counter"),s=this.shadowRoot.querySelector("path");o&&(o.textContent=t.toString()),s&&s.setAttribute("d",e)}}customElements.define("custom-count",t)}!function e(){let o=[400,600,700,1e3],s=3,n=i.shadowRoot.getElementById("countdown-path");t=setInterval(()=>{if(s>=0){let t=i.shadowRoot.getElementById("counter");if(t&&(t.textContent=s.toString()),n){let t=3-s;n.style.strokeDashoffset=o[t].toString()}s--}else clearInterval(t),console.log("Reiniciando contador..."),e()},1e3)}(),r.forEach(s=>{s.addEventListener("click",()=>{var n,l;clearInterval(t),i.remove(),console.log("¡Clic detectado dentro del Shadow DOM!"),r.forEach(t=>{t.style.opacity="0.1",s.style.opacity="1"});let a=s.getAttribute("data-choice");console.log(`Elegiste: ${a}`);let C=function(){let t=Math.floor(Math.random()*r.length),e=r[t],s=e.getAttribute("data-choice");console.log("Mano aleatoria elegida!",s);let n=document.createElement("div");n.style.display="flex",n.style.position="fixed",n.style.width="100vw",n.style.flexDirection="column",n.style.alignItems="center",n.style.justifyContent="center";let l=e.cloneNode(!0);return l.style.transform="scale(2) rotate(180deg)",l.style.opacity="1",l.style.zIndex="10",n.appendChild(l),o.appendChild(n),s}();console.log(`La compu eligi\xf3: ${C}`);let d=(n=a)===(l=C)?"empate":"piedra"===n&&"tijeras"===l||"tijeras"===n&&"papel"===l||"papel"===n&&"piedra"===l?"jugador":"computadora";"empate"!==d?function(t){if(!customElements.get("star")){class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){console.log("Renderizando Estrella");let t=`
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');

        :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--background-color, rgba(0, 0, 0, 0.5)); /* Fondo oscuro y transparente */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        z-index: 99999; /* Asegurarte de que est\xe9 encima */
        }

        svg path{
          fill: var(--star-color, #61a770ff);
        }
        svg text{
          font-family:'Odibee Sans', sans-serif;
          font-size: 48px;
          font-weight: bold;
          fill: white;
        }
          div{
          width: 200px;
          height: 200px;
          border: 10px solid #000;
          border-radius: 10px;
          background-color: #fff;
          }
          h1{
          font-family:'Odibee Sans', sans-serif;
          text-align: center
          }
          button{
          font-family:'Odibee Sans', sans-serif;
          background-color: #006CFC;
          border: 10px solid #001997;
          border-radius: 10px;
          width: 320px;
          padding: 15px;
          font-size: 30px;
          color: #fff;
          }
        </style>
        `;this.shadowRoot.innerHTML=t+`<svg width="263" height="262" viewBox="0 0 363 362" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M206.486 62.1223L208.047 62.9729L209.795 62.6458L320.673 41.9446L299.972 152.823L299.646 154.571L300.496 156.132L354.447 255.187L242.599 269.762L240.835 269.992L239.614 271.283L162.078 353.202L113.654 251.333L112.891 249.728L111.285 248.964L9.41443 200.538L91.3344 123.004L92.6263 121.782L92.8558 120.019L107.431 8.17017L206.486 62.1223Z" stroke="black" stroke-width="10"/>
  
  <path d="M122.552 194C121.452 194 120.517 193.615 119.747 192.845C118.977 192.075 118.592 191.14 118.592 190.04V159.405C118.592 158.342 118.977 157.425 119.747 156.655C120.517 155.885 121.452 155.5 122.552 155.5H135.037C136.137 155.5 137.072 155.885 137.842 156.655C138.612 157.425 138.997 158.342 138.997 159.405V167.985L133.882 166.83V162.54C133.882 161.99 133.68 161.532 133.277 161.165C132.91 160.762 132.452 160.56 131.902 160.56H125.687C125.137 160.56 124.66 160.762 124.257 161.165C123.89 161.532 123.707 161.99 123.707 162.54V186.905C123.707 187.455 123.89 187.932 124.257 188.335C124.66 188.702 125.137 188.885 125.687 188.885H131.902C132.452 188.885 132.91 188.702 133.277 188.335C133.68 187.932 133.882 187.455 133.882 186.905V181.57H128.822L129.977 176.455H138.997V190.04C138.997 191.14 138.612 192.075 137.842 192.845C137.072 193.615 136.137 194 135.037 194H122.552ZM151.378 194C150.278 194 149.325 193.615 148.518 192.845C147.748 192.075 147.363 191.122 147.363 189.985V181.68C147.363 180.58 147.748 179.645 148.518 178.875C149.325 178.068 150.278 177.665 151.378 177.665H155.668C156.255 177.665 156.731 177.482 157.098 177.115C157.501 176.712 157.703 176.235 157.703 175.685V173.65C157.703 173.1 157.501 172.642 157.098 172.275C156.731 171.872 156.255 171.67 155.668 171.67H149.728L150.883 166.5H158.858C159.958 166.5 160.893 166.903 161.663 167.71C162.47 168.48 162.873 169.415 162.873 170.515V194H151.378ZM154.513 188.83H157.703V182.835H154.513C153.963 182.835 153.486 183.037 153.083 183.44C152.716 183.807 152.533 184.265 152.533 184.815V186.85C152.533 187.4 152.716 187.877 153.083 188.28C153.486 188.647 153.963 188.83 154.513 188.83ZM168.608 194V166.5H180.103C181.166 166.5 182.101 166.885 182.908 167.655C183.714 168.425 184.118 169.36 184.118 170.46V194H178.948V173.65C178.948 173.063 178.746 172.587 178.343 172.22C177.939 171.853 177.481 171.67 176.968 171.67H173.778V194H168.608ZM193.831 194C192.731 194 191.778 193.615 190.971 192.845C190.201 192.075 189.816 191.122 189.816 189.985V181.68C189.816 180.58 190.201 179.645 190.971 178.875C191.778 178.068 192.731 177.665 193.831 177.665H198.121C198.708 177.665 199.185 177.482 199.551 177.115C199.955 176.712 200.156 176.235 200.156 175.685V173.65C200.156 173.1 199.955 172.642 199.551 172.275C199.185 171.872 198.708 171.67 198.121 171.67H192.181L193.336 166.5H201.311C202.411 166.5 203.346 166.903 204.116 167.71C204.923 168.48 205.326 169.415 205.326 170.515V194H193.831ZM196.966 188.83H200.156V182.835H196.966C196.416 182.835 195.94 183.037 195.536 183.44C195.17 183.807 194.986 184.265 194.986 184.815V186.85C194.986 187.4 195.17 187.877 195.536 188.28C195.94 188.647 196.416 188.83 196.966 188.83ZM215.379 194C214.279 194 213.344 193.615 212.574 192.845C211.804 192.038 211.419 191.085 211.419 189.985V185.42H216.534V186.85C216.534 187.4 216.735 187.877 217.139 188.28C217.542 188.647 218.019 188.83 218.569 188.83H219.724C220.274 188.83 220.732 188.647 221.099 188.28C221.502 187.877 221.704 187.4 221.704 186.85V184.815C221.704 184.265 221.502 183.807 221.099 183.44C220.732 183.037 220.274 182.835 219.724 182.835H215.379C214.279 182.835 213.344 182.45 212.574 181.68C211.804 180.873 211.419 179.92 211.419 178.82V170.515C211.419 169.415 211.804 168.48 212.574 167.71C213.344 166.903 214.279 166.5 215.379 166.5H222.914C224.014 166.5 224.949 166.903 225.719 167.71C226.489 168.48 226.874 169.415 226.874 170.515V175.08H221.704V173.65C221.704 173.1 221.502 172.642 221.099 172.275C220.732 171.872 220.274 171.67 219.724 171.67H218.569C218.019 171.67 217.542 171.872 217.139 172.275C216.735 172.642 216.534 173.1 216.534 173.65V175.685C216.534 176.235 216.735 176.712 217.139 177.115C217.542 177.482 218.019 177.665 218.569 177.665H222.914C224.014 177.665 224.949 178.068 225.719 178.875C226.489 179.645 226.874 180.58 226.874 181.68V190.205C226.837 191.232 226.434 192.13 225.664 192.9C224.894 193.633 223.977 194 222.914 194H215.379ZM232.968 194V153.96L238.138 152.805V166.5H244.683L243.473 171.67H238.138V194H232.968ZM253.107 194C252.007 194 251.053 193.615 250.247 192.845C249.477 192.038 249.092 191.085 249.092 189.985V170.46C249.092 169.36 249.477 168.425 250.247 167.655C251.053 166.885 252.007 166.5 253.107 166.5H260.587C261.723 166.5 262.677 166.885 263.447 167.655C264.217 168.425 264.602 169.36 264.602 170.46V178.82C264.602 179.92 264.217 180.873 263.447 181.68C262.677 182.45 261.723 182.835 260.587 182.835H254.262V186.85C254.262 187.4 254.445 187.877 254.812 188.28C255.215 188.647 255.71 188.83 256.297 188.83H263.447L264.602 194H253.107ZM254.262 177.665H257.452C258.002 177.665 258.46 177.482 258.827 177.115C259.23 176.712 259.432 176.235 259.432 175.685V173.65C259.432 173.1 259.23 172.642 258.827 172.275C258.46 171.872 258.002 171.67 257.452 171.67H256.297C255.71 171.67 255.215 171.872 254.812 172.275C254.445 172.642 254.262 173.1 254.262 173.65V177.665Z" fill="white"/>  <text x="35%" y="50%">Ganaste</text>
  </svg>
<div>
  <h1>Score</h1>
  <h3 id="player">Vos: <span class="playerScore">0</span></h3>
  <h3 id="computer">M\xe1quina: <span class="computerScore">0</span></h3>
</div>
  <button id="boton">Volver a Jugar</button>
  `}}customElements.define("custom-star",t)}setTimeout(()=>{let s=document.createElement("custom-star"),n=s.shadowRoot?.getElementById("boton");n?.addEventListener("click",()=>{location.reload()});let l=s.shadowRoot?.getElementById("player"),a=l?.getElementsByClassName("playerScore")[0];console.log(a);let r=s.shadowRoot?.getElementById("computer"),i=r?.getElementsByClassName("computerScore")[0];console.log(i);let C=e.data.Points.player||0,d=e.data.Points.computer||0;"jugador"===t?(s.style.setProperty("--star-color","#61a770ff"),s.style.setProperty("--background-color","rgba(0, 255, 0, 0.5)"),C++):(s.style.setProperty("--star-color","#a76161ff"),s.style.setProperty("--background-color","rgba(255, 0, 0, 0.5)"),d++);let c=s.shadowRoot?.querySelector("svg text");c&&(c.textContent="jugador"===t?"Ganaste":"Perdiste"),e.setState({Points:{player:C,computer:d}}),localStorage.setItem("Puntos",JSON.stringify(e.data.Points)),a&&(a.textContent=C),i&&(i.textContent=d),o?.appendChild(s),console.log("Resultado mostrado",s)},1e3)}(d):console.log("Ocurrió un Empate, Elige otra vez")})})}}];document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector(".root"),e=document.querySelector("body");e.style.margin="0",e.style.padding="0",e.style.boxSizing="border-box",function(t){function e(t){history.pushState({},"",t),s(t)}function s(s){for(let n of(console.log("el handle route recibio:",s),console.log("Contenido antes de vaciar:",t.innerHTML),t.innerHTML="",console.log("Se vacío el container"),console.log("Contenido después de vaciar:",t.innerHTML),o))if(n.path.test(s)){let o=n.component({goTo:e});console.log("Renderizando componente:",o),o&&t.appendChild(o)}}s(location.pathname),window.onpopstate=()=>{s(location.pathname)}}(t)});
//# sourceMappingURL=PIEDRA, PAPEL O TIJERAS.c9b01f2d.js.map
