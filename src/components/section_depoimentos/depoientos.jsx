import estiloDepo from './depo.module.css';
import Image from 'next/image';
import pizza from '../../../public/pizzaGrande.png'
import teste from '../../../public/imgdep1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Depoimentos(){





    return(

        <section className={estiloDepo.boxDepoimentos}>


           <section className={estiloDepo.boxImagePizza}>
                
                <Image width={500}  height={500} src={pizza}/>

           </section>

            <section  className={estiloDepo.boxTxDepoimentos}>

                <h2>Depoimentos</h2>
                <p>O que dizem sobre nós ?</p>

                <div className={estiloDepo.boxAvatarTexto}>

                    <Image alt='imagem de uma pizza saborosa' src={teste}/>
                    <div className={estiloDepo.boxAvaliacao}>

                        <h3>Ana Júlia</h3>
                        <div className={estiloDepo.boxStars}>
                                <div className={estiloDepo.stars}>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                </div>

                                <span>4.0</span>
                        </div>

                    </div>

                </div>

                <div className={estiloDepo.depoimentos}>
                  
                  <p>
                  A comida estava excelente e o serviço gentil nos surpreendeu! Dica: reserve umas 3 horas para ter uma experiência incrível.
                  </p>

                </div>


                <div className={estiloDepo.navegacao}>

                    <div><p>1</p></div>
                    <div><p>2</p></div>
                    <div><p>3</p></div>

                </div>



            </section>


        </section>

    )
}