import hookContext from '@/hookContext/hookContext';
import estiloEnd from './endereco.module.css';
import StatusPedido from '../statusPedido/statusPedido';
import Formulario from '../Formulário/formulario';



export default function PageEndereco(){


    const {goPageEndereco} = hookContext()


    return(


        <section className={estiloEnd.boxEndereco}>

            <section className={estiloEnd.boxFilho}>

                <button onClick={goPageEndereco}>voltar</button>

                <h1>Endereço de Entraga:</h1>

                <Formulario/>

            </section>



        </section>

    )

}