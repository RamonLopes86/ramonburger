// 
import estiloHeader from './header.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/logosf.png'


export default function Header(){


        return(

            <section className={estiloHeader.boxHeader}>

                <Image className={estiloHeader.logo} alt='icone de uma sacola' src={logo}/>

                <nav>
                    <ul>
                        <li>Reservas</li>
                        <li>Serviços</li>
                        <li>Cardápio</li>
                        <li>Depoimentos</li>
                    </ul>
                </nav>


                <section className={estiloHeader.boxBag}>

                        <p>Meu Carrinho</p>
                        <FontAwesomeIcon className={estiloHeader.iconBag} icon={faBagShopping}/>
                        
                </section>

            </section>



        )


}