import estiloMenuEscon from './menuescon.module.css';
import context from '@/context/context';
import React , {useContext} from 'react';



export default function MenuEscondido(){

    const {menuOpen} = useContext(context)
    


        return(

            <section className={estiloMenuEscon.boxEscondido}>

                    <nav className={`${estiloMenuEscon.navEscondido} ${menuOpen}`}>

                        <ul>
                            <li>Reservas</li>
                            <li>Serviços</li>
                            <li>Cardápio</li>
                            <li>Depoimentos</li>
                        </ul>

                    </nav>
                    
            </section>


                    

        )

}