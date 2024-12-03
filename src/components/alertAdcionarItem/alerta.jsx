import hookContext from '@/hookContext/hookContext';
import estiloAletra from './alerta.module.css';
import React , {useState} from 'react';




export default function Alerta() {


   const {txMsg , alertMsg , corAlert} = hookContext()




    return (

    
            <section   className={`${estiloAletra.boxAlerta} ${alertMsg ? estiloAletra.alertOn : estiloAletra.alertOff} ${corAlert ? estiloAletra.corAlertOff : estiloAletra.corAlertOn} `}>

                <span className={estiloAletra.cardAlerta}>{txMsg}</span>

            </section>

   
           

    )
   




}