import estiloSac from './sacola.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


export default function SacolaCompras(){


        return(

            
            <button className={estiloSac.btnSacola}>
                
            <FontAwesomeIcon className={estiloSac.iconSacola} icon={faBagShopping}/>

            <p className={estiloSac.contador}></p>

            </button>
            
            


        )

}