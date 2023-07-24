import ContentProducto from "./contenedor-productos/ContentProducto";
import Descripcion from "./descripcion-pyme/Descripcion";
import Mostrador from "./mostrador/Mostrador";
import Informacion from "./informacion-contacto/Informacion";
//----------------------------------------------------------------
// Importa los productos Generales cuando esta en la Raiz
//----------------------------------------------------------------
export default function General (){
    return(
        <div>
            <a name="inicio"></a>
            
            <Mostrador/>
            <ContentProducto/>
            {/* Ancla */}
            <a name="acercaDe"></a>
            <Descripcion/>
            <Informacion />
        </div>
    )
}