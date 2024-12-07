import hookContext from '@/hookContext/hookContext';
import estiloEnde from './statusEnd.module.css'


export default function StatusEndereco() {


    const {goBackEndereco} = hookContext()
    

    

    return (

        <section className={estiloEnde.statusPedido}>

            <div className={estiloEnde.status}>
                <div className={estiloEnde.numero}>1</div>
                <div className={estiloEnde.traco}></div>
                <div className={estiloEnde.numero}>2</div>
                <div className={estiloEnde.traco}></div>
                <div className={estiloEnde.numero}>3</div>
            </div>

            <button onClick={goBackEndereco}  className={estiloEnde.btnFechar}>Fechar</button>

        </section>


    )

}