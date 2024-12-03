import hookContext from '@/hookContext/hookContext';
import estiloAletra from './alerta.module.css';




export default function Alerta() {


    const { alertMsg , txMsg } = hookContext()




    return (

        alertMsg && (

            <section className={`${estiloAletra.boxAlerta}`}>

                <span className={estiloAletra.cardAlerta}>{txMsg}</span>

            </section>

        ) 
           

    )
   




}