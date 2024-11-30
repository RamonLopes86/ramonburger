import estiloMenuEscon from './menuescon.module.css';
import hookContext from '@/hookContext/hookContext';



export default function MenuEscondido(){

    const {close} = hookContext()





        return(

            <section  className={estiloMenuEscon.boxEscondido}>

                    <nav style={close} className={`${estiloMenuEscon.navEscondido}`}>

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