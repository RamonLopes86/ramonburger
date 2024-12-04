import estiloMenuEscon from './menuescon.module.css';
import hookContext from '@/hookContext/hookContext';
import Link from 'next/link';



export default function MenuEscondido(){

    const {close} = hookContext()





        return(

            <section  className={estiloMenuEscon.boxEscondido}>

                    <nav style={close} className={`${estiloMenuEscon.navEscondido}`}>

                        <ul>
                            <Link className={estiloMenuEscon.linkEscondido} href={''}>
                                <li>Reservas</li>
                            </Link>
                            <Link className={estiloMenuEscon.linkEscondido} href={''}>
                                <li>Serviços</li>
                            </Link>
                            <Link className={estiloMenuEscon.linkEscondido} href={'#idcardapio'}>
                                <li>Cardápio</li>
                            </Link>
                            <Link className={estiloMenuEscon.linkEscondido} href={'#iddepoimentos'}>
                                <li>Depoimentos</li>
                            </Link>
                        </ul>

                    </nav>
                    
            </section>


                    

        )

}