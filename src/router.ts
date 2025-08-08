import { initPageEntryPoint } from "./pages/pageEntry";
import { initPageA } from "./pages/pageA";
import { initPageB } from "./pages/pageB";
const routes = [
  {
    path:/\//,
    component: initPageEntryPoint
  },
  {
    path:/\/Reglas/,
    component: initPageA
  }, 
  {
    path:/\/Empieza/,
    component: initPageB
  }, 

]

export function initRouter(container:Element){
  function goTo(path){
  location.hash = path;
  handleRoute(path)
  }

  function handleRoute(route){
    console.log("el handle route recibio:", route);
    
    
    console.log("Contenido antes de vaciar:", container.innerHTML); // Verificar contenido antes de vaciar
    container.innerHTML = ''; // Esto debería vaciar el container
    console.log('Se vacío el container');
    console.log("Contenido después de vaciar:", container.innerHTML)
      
    
    
    for(const r of routes){
      if(r.path.test(route)){
        const el = r.component({goTo:goTo});
        console.log("Renderizando componente:", el);
        
        if (el!) {
        container.appendChild(el);
        } else {
          // No hace nada o muestra algo por defecto
        }
      }
    }
  }

  handleRoute(location.hash.slice(1) || '/'); // Usar hash aquí

  window.onhashchange = () =>{
  handleRoute(location.hash.slice(1));
  };
  
  return { goTo };
}