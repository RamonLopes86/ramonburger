import estiloCardapio from './cardapio.module.css';
import React , {useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger , faPizzaSlice , faDrumstickBite  ,faBacon , faMartiniGlassCitrus , faIceCream} from '@fortawesome/free-solid-svg-icons';
import array from '@/dados/dados';



export default function Cardapio(){

    const [ lista , setLista] = useState([])




    return(

        <section className={estiloCardapio.boxCardapio}>
            
            <section className={estiloCardapio.boxTitulo}>

                <h1>Cardápio</h1>
                <p>Conheça o nosso cardápio</p>

            </section>


            <div className={estiloCardapio.boxButton}>

                <button><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faBurger}/> Burger</button>
                <button><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faPizzaSlice}/>Pizza</button>
                <button><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faDrumstickBite}/>Churrasco</button>
                <button><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faIceCream} />Doces</button>
                <button><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faMartiniGlassCitrus}/>Bebidas</button>


            </div>





        </section>


    )

}