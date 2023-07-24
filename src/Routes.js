import General from "./componentes/General";
import ContentProducto from "./componentes/contenedor-productos/ContentProducto";
import Descripcion from "./componentes/descripcion-pyme/Descripcion";
import Mostrador from "./componentes/mostrador/Mostrador";
import NotFound from "./componentes/not-found/NotFound";



const routes = [
    {path:"/", element: <General />},
    {path:"/mostrador", element: <Mostrador />},
    {path:"/tienda", element: <ContentProducto />},
    {path:"/descripcion", element: <Descripcion />},
    {path:"/*", element: <NotFound />},
    
];

export default routes;