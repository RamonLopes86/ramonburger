

import estiloAgend from './agendamento.module.css';
import Image from 'next/image';
import calendario from '../../../public/calendario.png'
import hookContext from '@/hookContext/hookContext';





export default function Agendamento(){

    const {boxTxRef , boxImgRef, animaAgenda , animaImgAgenda} = hookContext()
 



 



    return(

        <section id='idagendamento' className={estiloAgend.boxAgendamento}>


                <section  className={estiloAgend.agendamentoInfo}>


                    <div ref={boxTxRef} className={`${estiloAgend.boxTxAgendamento} ${animaAgenda ? estiloAgend.agendaOn : estiloAgend.agendaTx}`} >

                        <p>Reserva</p>
                        <h1>Quer reservar um horário ?</h1>

                         <p>Mande uma mensagem clicando no botão abaixo.
                         Reserve sua data e horário de forma simples e rápida.</p>    


                         <button>Fazer reserva</button>                       

                    </div>


                    <div ref={boxImgRef}  className={`${estiloAgend.boxImagemAgendamento} ${animaImgAgenda ? estiloAgend.animaImgOn : estiloAgend.agendaImg}`}>

                        <div className={estiloAgend.boxImageAgendamentoFilho}>

                            <Image className={estiloAgend.imgCalendario} alt='imagem de um calendario' src={calendario}/>
                        </div>




                    </div>



                </section>


              
        </section>

    )

}