import hookContext from '@/hookContext/hookContext';
import estiloEnd from './endereco.module.css';
import Formulario from '../Formulário/formulario';
import StatusEndereco from '../statusEndereco/statusEndereco';
import SubTotal from '../sub-Total/subTotal';
import AlertCep from '../alertCep/alertCep';



export default function PageEndereco(){


    const {goPageEndereco , goPageRevisar} = hookContext()


    return(


        <section className={estiloEnd.boxEndereco}>


            <AlertCep/>

        

            <section className={estiloEnd.boxFilho}>

                <StatusEndereco/>

                <h1>Endereço de Entraga:</h1>
               
                <Formulario/>


                <SubTotal/>

            </section>


           


           

        </section>

    )

}