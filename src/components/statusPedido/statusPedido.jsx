import hookContext from '@/hookContext/hookContext';
import estiloStatus from './status.module.css';


export default function StatusPedido() {


    const {goPageRevisar} = hookContext()


    

    return (

        <section className={estiloStatus.statusPedido}>

            <div className={estiloStatus.status}>
                <div className={`${estiloStatus.numero}`}>1</div>
                <div className={estiloStatus.traco}></div>
                <div className={estiloStatus.numero}>2</div>
                <div className={estiloStatus.traco}></div>
                <div className={estiloStatus.numero}>3</div>
            </div>

            <button className={estiloStatus.btnFechar} onClick={goPageRevisar}>Fechar</button>

        </section>


    )

}