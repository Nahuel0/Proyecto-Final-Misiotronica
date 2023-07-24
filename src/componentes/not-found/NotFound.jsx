import Imagen from '../imagenes/Imagen'
import './notFound.css'
export default function NotFound(){
    return(
        <div id='cont-not-found'>
            
            <Imagen 
                class="img-notfound"
                img={3}/>
            <h1>Oh oh! No se encontro la pagina</h1>
            <a href="http://localhost:3000/" className='ir-a-principal'>Ir a la pagina principal</a>
        </div>
    );
}