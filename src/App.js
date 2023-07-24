import FlechaArriba from "./componentes/flecha-up/FlechaArriba";
import Navegation from "./componentes/barra-nav/Navegation";
import Informacion from "./componentes/informacion-contacto/Informacion";
import {createBrowserRouter,RouterProvider, } from "react-router-dom"; 
import routes from "./Routes";
import "./App.css"

const router = createBrowserRouter(routes);
function App() {
    return (
    <div className="App" >
      <Navegation />
      <FlechaArriba/>
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
