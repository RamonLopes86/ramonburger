import estiloEnviarPedido from './enviarPedido.module.css';
import StatusEnviarPedido from '../statusEnviarPedido/statusEnviarPedido';
import SubTotal from '../sub-Total/subTotal';
import Image from 'next/image';
import hookContext from '@/hookContext/hookContext';
import img1 from '../../../public/carne5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';



export default function EnviarPedido(){


    const {pgEnviarPedido , carrinho} = hookContext()


    
    
    return(

        pgEnviarPedido && (

            <section className={estiloEnviarPedido.boxPai}>



            <section className={estiloEnviarPedido.boxFilho}>


            <StatusEnviarPedido/>
           
                <h1>Pedido</h1>

                <section className={estiloEnviarPedido.boxItensPedido}>
                    <h2>Itens do Pedido</h2>
                    <div className={estiloEnviarPedido.pedidos}>

                        <div className={estiloEnviarPedido.boxInfoPedido}>

                            <Image alt='imagem' className={estiloEnviarPedido.iconPedidoSend} src={img1}/>

                            <div className={estiloEnviarPedido.boxTxPedido}>
                                    <h2>nome do item</h2>
                                    <p>Preço</p>
                            </div>
                
                        </div>
                        <p>x 1</p>
                    </div>
                </section>
                <section className={estiloEnviarPedido.boxLocalEntraga}>
                    <h2>Local da Entraga</h2>
                   <div className={estiloEnviarPedido.boxFilhoEntrega}>
                         <FontAwesomeIcon className={estiloEnviarPedido.iconMapa} icon={faMapLocationDot}/>
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