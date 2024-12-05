import hookContext from '@/hookContext/hookContext';
import estiloEnd from './endereco.module.css';



export default function PageEndereco(){


    const {goPageEndereco} = hookContext()


    return(


        <section className={estiloEnd.boxEndereco}>


                <h1>endereço</h1>

                <button onClick={goPageEndereco}>voltar</button>


        </section>

    )

}