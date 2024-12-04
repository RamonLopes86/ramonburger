import estiloStatus from './status.module.css';


export default function StatusPedido() {

    return (

        <section className={estiloStatus.statusPedido}>

            <div className={estiloStatus.status}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

            <button>Fechar</button>

        </section>


    )

}