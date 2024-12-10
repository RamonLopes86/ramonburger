import estiloAgend from './agendamento.module.css';
import Image from 'next/image';
import calendario from '../../../public/calendario.png'



export default function Agendamento(){

    return(

        <section className={estiloAgend.boxAgendamento}>


                <section className={estiloAgend.agendamentoInfo}>


                    <div className={estiloAgend.boxTxAgendamento} >

                        <p>Reserva</p>
                        <h1>Quer reservar um horário ?</h1>

                         <p>Mande uma mensagem clicando no botão abaixo.
                         Reserve sua data e horário de forma simples e rápida.</p>    


                         <button>Fazer reserva</button>                       

                    </div>


                    <div className={estiloAgend.boxImagemAgendamento}>

                        <div className={estiloAgend.boxImageAgendamentoFilho}>

                            <Image className={estiloAgend.imgCalendario} alt='imagem de um calendario' src={calendario}/>
                        </div>


                    

                    </div>



                </section>


              
        </section>

    )

}