import estiloRev from './revisar.module.css';
import StatusPedido from '../statusPedido/statusPedido';
import SubTotal from '../sub-Total/subTotal';
import hookContext from '@/hookContext/hookContext';
import Image from 'next/image';
import formatarMoeda from '@/funcoesUteis/formatMoeda';
import CarriinhoVazio from '../carrinhoVazio/carrinhoVazio';
import PageEndereco from '../section-page-endereço/pageEndereco';
import AlertCep from '../alert/alert';









export default function RevisarPedido() {

    const { pgRevisar, carrinho, excluirItemPedido, adicionar, adcionarPageRevisar , pgEndereco  } = hookContext()




    return (

        pgRevisar && (

            <section className={estiloRev.sectionPaiRevisar}>

                <AlertCep/>

                <section className={estiloRev.boxFilho}>


                    <StatusPedido />


                    <section className={estiloRev.boxCarrinho}>

                        <h2>Seu Carrinho : </h2>


                        {

                           carrinho.length > 0 ? (


                            carrinho.map((itens, index) => {


                                return (

                                 

                                      

                                    <div key={index} className={estiloRev.itensCarrinho}>
                                        <div className={estiloRev.cardCarrinho}>
                                            <Image className={estiloRev.imgProd} alt={'nome da imagem'} src={itens.img} />
                                            <div className={estiloRev.boxNomeItens}>
                                                <h3>{itens.nome}</h3>
                                                <p>{formatarMoeda(itens.preco, 'BRL')}</p>
                                            </div>
                                        </div>
                                        <div className={estiloRev.boxCountRevisar}>
                                            <div className={estiloRev.boxAddItens}>
                                                <div onClick={() => adcionarPageRevisar('subtrair', itens.id)}>-</div>
                                                <div>{itens.count}</div>
                                                <div onClick={() => adcionarPageRevisar('soma', itens.id)}>+</div>
                                            </div>
                                            <button onClick={() => excluirItemPedido(itens.id)}>x</button>
                                        </div>
                                    </div>


                             

                              

                                )
                                                            
                                                    
                            })


                           ):(

                               <CarriinhoVazio/>
                           )
                                                

                        }


                    </section>


                    <SubTotal />


                    


                </section>


               {
                pgEndereco && (

                    <PageEndereco/>
                )
               }

            </section>


        )


    )

}
                            

                           






























