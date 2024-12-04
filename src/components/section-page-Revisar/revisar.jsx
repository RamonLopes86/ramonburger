import estiloRev from './revisar.module.css';
import StatusPedido from '../statusPedido/statusPedido';
import SubTotal from '../sub-Total/subTotal';
import hookContext from '@/hookContext/hookContext';






export default function RevisarPedido(){

    const {pgRevisar , goPageRevisar , carrinho} = hookContext()


    return(

      pgRevisar && (

        <section className={estiloRev.sectionPaiRevisar}>

            <section className={estiloRev.boxFilho}>


                <StatusPedido/>

                
                <section className={estiloRev.boxCarrinho}>
                    <h2>Seu Carrinho : </h2>
                    <div className={estiloRev.ItensCarrinho}>
                        <div className={estiloRev.cardCarrinho}>
                            {/* <Image alt={'nome da imagem'} src={null} /> */}
                            <h3>Hamburger</h3>
                            <p>R$79,00</p>
                        </div>
                        <div className={estiloRev.boxCountRevisar}>
                            <div className={estiloRev.boxAddItens}>
                                <div></div>
                                <div></div>
                                <div></div>
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