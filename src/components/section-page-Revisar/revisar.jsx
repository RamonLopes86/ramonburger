import estiloRev from './revisar.module.css';
import StatusPedido from '../statusPedido/statusPedido';
import SubTotal from '../sub-Total/subTotal';
import hookContext from '@/hookContext/hookContext';
import Image from 'next/image';
import img1 from '../../../public/pizza1.jpg'






export default function RevisarPedido(){

    const {pgRevisar , goPageRevisar , carrinho} = hookContext()
    

    return(

      pgRevisar && (

        <section className={estiloRev.sectionPaiRevisar}>

            <section className={estiloRev.boxFilho}>


                <StatusPedido/>

                
                <section className={estiloRev.boxCarrinho}>

                    <h2>Seu Carrinho : </h2>

                    <div className={estiloRev.itensCarrinho}>
                        <div className={estiloRev.cardCarrinho}>
                            <Image className={estiloRev.imgProd} alt={'nome da imagem'} src={img1} />
                            <div className={estiloRev.boxNomeItens}>
                                <h3>Hamburger</h3>
                                <p>R$79,00</p>
                            </div>
                        </div>
                        <div className={estiloRev.boxCountRevisar}>
                            <div className={estiloRev.boxAddItens}>
                                <div>-</div>
                                <div>0</div>
                                <div>+</div>
                            </div>
                            <button>x</button>
                        </div>
                    </div>


                </section>


                <SubTotal/>


            </section>
       
             

        </section>


      )


    )

}