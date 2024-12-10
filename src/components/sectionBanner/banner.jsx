import estiloBanner from './banner.module.css';
import Link from 'next/link';
import Image from 'next/image';
import hamburger from '../../../public/burgerBanner.png';
import insta from '../../../public/insta.png';
import wpp from '../../../public/wpp.png';
import yt from '../../../public/yt.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import React , {useState , useRef , useEffect} from 'react';


export default function Apresentacao(){

    let iconRedes = [insta , wpp , yt]


    const [animaTx , setAnimaTx] = useState(estiloBanner.animaTxOff)
    const [animaImg , setAnimaImg ] = useState(estiloBanner.animaImgOff)
    const imgRef = useRef()
    const txRef = useRef()


    useEffect(()=>{


        const myObserver = new IntersectionObserver((elemento)=>{

            elemento.forEach((el)=>{

                if(el.isIntersecting){

                    if(el.target === imgRef.current){

                        setAnimaImg(estiloBanner.animaOn)

                    }

                    if(el.target === txRef.current){


                        setAnimaTx(estiloBanner.animaOn)

                    }


                }else{

                    if(el.target === imgRef.current){

                        setAnimaImg(estiloBanner.animaImgOff)

                    }

                    if(el.target === txRef.current){


                        setAnimaTx(estiloBanner.animaTxOff)

                    }


                }
            })


        })



        
        myObserver.observe(imgRef.current)
        myObserver.observe(txRef.current)

    },[])



        return(


            <section className={estiloBanner.boxBanner}>

                    <section ref={txRef} className={`${estiloBanner.boxTexto} ${animaTx}`}>

                        <h1>Escolha sua comida <strong>favorita</strong></h1>
                        <p>Aproveite nosso cardápio ! Escolha o que desejar e receba em sua casa de forma rápida e segura</p>  


                        <div className={estiloBanner.boxBtn}>

                                <button>Ver cardápio</button>
                                <Link className={estiloBanner.link} href={"https://wa.me/5571991265530"} target='_Blank'><button><FontAwesomeIcon className={estiloBanner.iconPhone} icon={faPhone}/> 7199126-5530</button></Link>
                          
                        </div>  

                        <div className={estiloBanner.boxRedes}>

                                {

                                    iconRedes.map((icones , index)=>{

                                        return(

                                            <Image key={index} className={estiloBanner.iconRede} alt='icones das redes sociais' src={icones}/>
                                        )

                                    })
                                }

                        </div>    
                           
                            

                    </section>

                    <section ref={imgRef} className={`${estiloBanner.imgBanner} ${animaImg}`}>

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