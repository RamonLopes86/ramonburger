import estiloBanner from './banner.module.css';
import Link from 'next/link';
import Image from 'next/image';
import hamburger from '../../../public/burgerBanner.png';
import insta from '../../../public/insta.png';
import wpp from '../../../public/wpp.png';
import yt from '../../../public/yt.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


export default function Apresentacao(){


    let iconRedes = [insta , wpp , yt]

        return(


            <section className={estiloBanner.boxBanner}>

                    <section className={estiloBanner.boxTexto}>

                        <h1>Escolha sua comida <strong>favorita</strong></h1>
                        <p>Aproveite nosso cardápio ! Escolha o que desejar e receba em sua casa de forma rápida e segura</p>  


                        <div className={estiloBanner.boxBtn}>

                                <button>Ver cardápio</button>
                                <Link className={estiloBanner.link} href={''}><button><FontAwesomeIcon className={estiloBanner.iconPhone} icon={faPhone}/> 7199126-5530</button></Link>
                          
                        </div>  

                        <div className={estiloBanner.boxRedes}>

                                {

                                    iconRedes.map((icones)=>{

                                        return(

                                            <Image className={estiloBanner.iconRede} alt='icones das redes sociais' src={icones}/>
                                        )

                                    })
                                }

                        </div>    
                           
                            

                    </section>

                    <section className={estiloBanner.imgBanner}>

                            <div className={estiloBanner.boxBack}>

                                <Image alt='imagem de um hamburger' className={estiloBanner.imgBurger} src={hamburger}/>


                                <div className={estiloBanner.msg}>

                                    <p> <FontAwesomeIcon className={estiloBanner.aspas} icon={faQuoteLeft}/> Entrega rápida e funcionários simpáticos. A comida chegou quente e muito saborosa <FontAwesomeIcon className={estiloBanner.aspas} icon={faQuoteRight}/> </p>
                                    <span>Ramon Lopes</span>

                                </div>

                            </div>

                    </section>

            </section>

        )


}