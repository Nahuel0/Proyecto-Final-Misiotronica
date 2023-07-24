
import "./logo.css"


export default function Logo(props){
    return(
        <div className={props.cont}>
            <img src={process.env.PUBLIC_URL + "/imagenes/icon/logoEmpresa.png"} className={props.imagenLogo}/>
            
            <h3 className='h3-logo'>Misiotronica</h3>
       </div>
    )
}