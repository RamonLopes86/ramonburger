import estiloSubTotal from './subTotal.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';




export default function SubTotal(){

    return(

        <section className={estiloSubTotal.boxSubTotal}>

             <div>

            <h2>Subtotal: R$ 150,00</h2>
            <p><FontAwesomeIcon icon={faMotorcycle}/> Entrega: + R$ 5,00  </p>
            <h2>Total: R$ 155,00</h2>

            </div>   

            <button>Continuar</button>
        


        </section>

    )

}