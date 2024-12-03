import estiloDepo from './depo.module.css';
import Image from 'next/image';
import pizza from '../../../public/pizzaGrande.png'
import teste from '../../../public/imgdep1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar , faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import hookContext from '@/hookContext/hookContext';

export default function Depoimentos(){

    const {arrayDepo} = hookContext()



    return(

        <section className={estiloDepo.boxDepoimentos}>


      

            
                   <section className={estiloDepo.boxImagePizza}>

                   
                        <Image className={estiloDepo.imgPizza} alt='imagem de uma pizza saborosa' src={pizza}/>

                   </section>
              
         

            <section  className={estiloDepo.boxTxDepoimentos}>

                <h2>Depoimentos</h2>
                <p>O que dizem sobre nós ?</p>

                <div className={estiloDepo.boxAvatarTexto}>

                    <Image className={estiloDepo.avatar} alt='imagem de um cliente' src={teste}/>

                    <div className={estiloDepo.boxAvaliacao}>

                        <h3>Ana Júlia</h3>
                        <div className={estiloDepo.boxStars}>
                                <div className={estiloDepo.stars}>
                                <FontAwesomeIcon className={estiloDepo.iconStars} icon={faStar}/>
                                <FontAwesomeIcon className={estiloDepo.iconStars} icon={faStar}/>
                                <FontAwesomeIcon className={estiloDepo.iconStars} icon={faStar}/>
                                <FontAwesomeIcon className={estiloDepo.iconStars} icon={faStar}/>
                                </div>

                                <span>4.0</span>
                        </div>

                    </div>

                </div>

                <div className={estiloDepo.depoimentos}>
                  
              

                    <FontAwesomeIcon className={estiloDepo.aspas} icon={faQuoteLeft}/> 

                        <p> A comida estava excelente e o serviço gentil nos surpreendeu! Dica: reserve umas 3 horas para ter uma experiência incrível.</p>

                    <FontAwesomeIcon className={estiloDepo.aspas} icon={faQuoteRight}/>

                 

                </div>




                <div className={estiloDepo.navegacao}>

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>

                </div>



            </section>


        </section>

    )
}