import estiloEnviarPedido from './enviarPedido.module.css';
import StatusEnviarPedido from '../statusEnviarPedido/statusEnviarPedido';
import SubTotal from '../sub-Total/subTotal';
import Image from 'next/image';
import hookContext from '@/hookContext/hookContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import formatarMoeda from '@/funcoesUteis/formatMoeda';



export default function EnviarPedido() {


    const { pgEnviarPedido, carrinho, inputCep, localidade, bairro, logradouro } = hookContext()






   


    return (

        pgEnviarPedido && (

            <section className={estiloEnviarPedido.boxPai}>



                <section className={estiloEnviarPedido.boxFilho}>


                    <StatusEnviarPedido />

                    <h1>Pedido</h1>






                    <section>

                        <section className={estiloEnviarPedido.boxItensPedido}>
                            <h2>Itens do Pedido</h2>
                            <div className={estiloEnviarPedido.pedidos}>

                                {

                                    carrinho.map((itens , index) => {

                                        return (

                                                <section key={index} className={estiloEnviarPedido.boxCardPedidos}>


                                                    <div  className={estiloEnviarPedido.boxInfoPedido}>
                                                        <Image alt='imagem' className={estiloEnviarPedido.iconPedidoSend} src={itens.img} />
                                                        <div className={estiloEnviarPedido.boxTxPedido}>
                                                            <h2>{itens.nome}</h2>
                                                            <p>{formatarMoeda(itens.preco , 'BRL')}</p>
                                                        </div>
                                                    </div>
                                                    <p>x{itens.count}</p>


                                                </section>
                                           

                                        )

                                    })


                                }


                            </div>
                        </section>
                        <section className={estiloEnviarPedido.boxLocalEntraga}>
                            <h2>Local da Entraga</h2>
                            <div className={estiloEnviarPedido.boxFilhoEntrega}>
                                <FontAwesomeIcon className={estiloEnviarPedido.iconMapa} icon={faMapLocationDot} />
                                <div className={estiloEnviarPedido.boxTxEntrega}>
                                    <h2>{logradouro} - {bairro}</h2>
                                    <p>{localidade} /{inputCep}</p>
                                </div>
                            </div>
                        </section>


                    </section>











                    <SubTotal />


                </section>


            </section>



        )



    )


}