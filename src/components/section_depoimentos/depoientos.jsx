import estiloDepo from './depo.module.css';
import Image from 'next/image';
import pizza from '../../../public/pizzaGrande.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faQuoteRight, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import hookContext from '@/hookContext/hookContext';
import React, { useState, useRef, useEffect } from 'react';




export default function Depoimentos() {

    const { arrayDepo, exibirDepoimento, corBtnDepo } = hookContext()


    const icons =

    {
        Star: faStar,
        Storke: faStarHalfStroke

    }



    const boxTxRefDepo = useRef()
    const boxImgRefDepo = useRef()
    const [animaTx , setAnimaTx] = useState(estiloDepo.depoOff)
    const [animaImg , setAnimaImg] = useState(estiloDepo.depoOff)


    useEffect(() => {

        const myObserver = new IntersectionObserver((elemento) => {

            elemento.forEach((el) => {

                if (el.isIntersecting) {

                    
                    if(el.target === boxTxRefDepo.current){


                        setAnimaTx(estiloDepo.depoOn)
                    }

                    if(el.target === boxImgRefDepo.current){

                        setAnimaImg(estiloDepo.depoOn)
                    }


                }else{

                    if(el.target === boxTxRefDepo.current){


                        setAnimaTx(estiloDepo.depoOff)
                    }

                    if(el.target === boxImgRefDepo.current){

                        setAnimaImg(estiloDepo.depoOff)
                    }


                }

            })


         


        })



        if(boxTxRefDepo.current){

            myObserver.observe(boxTxRefDepo.current)
        }

        if(boxImgRefDepo){

            myObserver.observe(boxImgRefDepo.current)
        }

        
        
      return ()=>{

            
        if(boxTxRefDepo.current){

            myObserver.unobserve(boxTxRefDepo.current)
        }

        if(boxImgRefDepo){

            myObserver.unobserve(boxImgRefDepo.current)
        }

      }


    })




    return (

        <section id='iddepoimentos' className={estiloDepo.boxDepoimentos}>





            <section ref={boxImgRefDepo} className={`${estiloDepo.boxImagePizza} ${animaImg}`}>


                <Image className={estiloDepo.imgPizza} alt='imagem de uma pizza saborosa' src={pizza} />

            </section>




            {
                arrayDepo.map((infos) => {





                    return (

                        <section ref={boxTxRefDepo} key={infos.id} className={`${estiloDepo.boxTxDepoimentos} ${animaTx}`}>
                            <h2>Depoimentos</h2>
                            <p>O que dizem sobre nós ?</p>
                            <div className={estiloDepo.boxAvatarTexto}>
                                <Image className={estiloDepo.avatar} alt='imagem de um cliente' src={infos.img} />
                                <div className={estiloDepo.boxAvaliacao}>
                                    <h3>{infos.nome}</h3>
                                    <div className={estiloDepo.boxStars}>

                                        <div className={estiloDepo.stars}>

                                            {

                                                infos.stars.map((icone, index) => {

                                                    return (

                                                        <FontAwesomeIcon className={estiloDepo.iconStars} key={index} icon={icons[icone]} />
                                                    )

                                                })

                                            }



                                        </div>


                                        <span>{infos.nota}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={estiloDepo.depoimentos}>
                                <FontAwesomeIcon className={estiloDepo.aspas} icon={faQuoteLeft} />
                                <p>{infos.dep}</p>
                                <FontAwesomeIcon className={estiloDepo.aspas} icon={faQuoteRight} />
                            </div>
                            <div className={estiloDepo.navegacao}>
                                <div className={corBtnDepo === 1 ? estiloDepo.corbtn : null} onClick={() => exibirDepoimento(1)}>1</div>
                                <div className={corBtnDepo === 2 ? estiloDepo.corbtn : null} onClick={() => exibirDepoimento(2)}>2</div>
                                <div className={corBtnDepo === 3 ? estiloDepo.corbtn : null} onClick={() => exibirDepoimento(3)}>3</div>
                            </div>
                        </section>
                    )
                })
            }


        </section>

    )
}