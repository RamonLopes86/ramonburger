import estiloEnviarPedido from './enviarPedido.module.css';
import StatusEnviarPedido from '../statusEnviarPedido/statusEnviarPedido';
import SubTotal from '../sub-Total/subTotal';
import Image from 'next/image';
import hookContext from '@/hookContext/hookContext';



export default function EnviarPedido(){


    const {pgEnviarPedido} = hookContext()

    
    return(

        pgEnviarPedido && (

            <section className={estiloEnviarPedido.boxPai}>

            <section className={estiloEnviarPedido.boxFilho}>


            <StatusEnviarPedido/>

                <section className={estiloEnviarPedido.boxItensPedido}>
                    <h1>Itens do Pedido</h1>
                    <div className={estiloEnviarPedido.pedidos}>
                        <div className={estiloEnviarPedido.boxInfoPedido}>
                            {/* <Image/> */}
                            <div className={estiloEnviarPedido.boxTxPedido}>
                                    <h2>nome do item</h2>
                                    <p>Preço</p>
                            </div>
                
                        </div>
                        <p>x1</p>
                    </div>
                </section>
                <section className={estiloEnviarPedido.boxLocalEntraga}>
                    <h1>Local da Entraga</h1>
                   <div>
                         {/* <Image/> */}
                         <div className={estiloEnviarPedido.boxTxEntrega}>
                            <h2>rua jayme ...</h2>
                            <p>salvador / 42720752</p>
                         </div>
                   </div>
                </section>


                <SubTotal/>


            </section>


        </section>



        )



    )


}