import estiloFooter from './footer.module.css';



export default function Footer() {


    const ano = new Date().getFullYear()



    return (

        <section className={estiloFooter.boxFooter}>

                {

                    <p className={estiloFooter.fotterParagrafo}>Ramon Lopes <span>&copy;</span> , todos os direitos reservados - <span>{ano}</span> </p>

                }

        </section>


    )
}