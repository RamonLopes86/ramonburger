import estiloSubTotal from './subTotal.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import hookContext from '@/hookContext/hookContext';
import formatarMoeda from '@/funcoesUteis/formatMoeda';




export default function SubTotal(){

    const {carrinho , goPageEndereco , btnVoltar , goBack } = hookContext()

    let taxa = 5

    const teste = carrinho.map((itens)=>{

        return{

            ...itens
        }

    })

   

    const valorSomado = teste.reduce((acc , it)=>{

            return acc + (it.preco * it.count)

    },0)

    return(

        <section className={estiloSubTotal.boxSubTotal}>

             <div className={estiloSubTotal.boxValores}>

            <h2>Subtotal: {formatarMoeda(valorSomado , 'BRL')}</h2>
            <p><FontAwesomeIcon icon={faMotorcycle}/> Entrega: + R$ 5,00  </p>
            <h3>Total: {formatarMoeda(valorSomado + taxa , 'BRL')}</h3>


           

            </div>   

           
            <div className={estiloSubTotal.boxBotoes}>

                <button onClick={goBack} className={btnVoltar ? estiloSubTotal.btnOn : estiloSubTotal.btnOff} >voltar</button>
                <button onClick={goPageEndereco}>Continuar</button>
               
            
            </div>



        </section>

    )

}