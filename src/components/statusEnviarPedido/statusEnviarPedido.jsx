import estiloEnviar from './statusEnviar.module.css';

import hookContext from '@/hookContext/hookContext';





export default function StatusEnviarPedido() {


    const {goBackEndereco} = hookContext()
    

    

    return (

        <section className={estiloEnviar.statusPedido}>

            <div className={estiloEnviar.status}>
                <div className={estiloEnviar.numero}>1</div>
                <div className={estiloEnviar.traco}></div>
                <div className={estiloEnviar.numero}>2</div>
                <div className={estiloEnviar.traco}></div>
                <div className={estiloEnviar.numero}>3</div>
            </div>

            <button onClick={goBackEndereco}  className={estiloEnviar.btnFechar}>Fechar</button>

        </section>


    )

}