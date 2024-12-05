import estiloCarVazio from './carrinhoVazio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';



export default function CarriinhoVazio(){


    return(

        <section className={estiloCarVazio.boxCarVazio}>

                <div className={estiloCarVazio.boxConteudo}>
                    <FontAwesomeIcon className={estiloCarVazio.iconBagVazio} icon={faBagShopping}/>
                    <p>Seu carrinho está vazio : (</p>
                </div>
        
        </section>

    )


}