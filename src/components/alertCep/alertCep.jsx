import hookContext from '@/hookContext/hookContext';
import estiloAlertCep from './alertcep.module.css';



export default function AlertCep(){

    const {animaAlertCep , msgAlertCep , styleMsgCep} = hookContext()

    return(

        <section className={`${estiloAlertCep.boxAlert} ${animaAlertCep ? estiloAlertCep.alertOn : estiloAlertCep.alertOff} ${styleMsgCep ? estiloAlertCep.vermelho : estiloAlertCep.amarelo}`}>

            <p>{msgAlertCep}</p>

        </section>
    )
}