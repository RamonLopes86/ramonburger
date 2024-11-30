import estiloMenuEscon from './menuescon.module.css';



export default function MenuEscondido(){

    

        return(

            <section className={estiloMenuEscon.boxEscondido}>

                    <nav className={estiloMenuEscon.navEscondido}>

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