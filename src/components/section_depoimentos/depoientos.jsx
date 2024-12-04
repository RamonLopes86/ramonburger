import estiloDepo from './depo.module.css';
import Image from 'next/image';
import pizza from '../../../public/pizzaGrande.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faQuoteRight , faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import hookContext from '@/hookContext/hookContext';




export default function Depoimentos() {

    const { arrayDepo , exibirDepoimento , corBtnDepo } = hookContext()


    const icons = 

        {
            Star:faStar,
            Storke:faStarHalfStroke

        }



    return (

        <section id='iddepoimentos' className={estiloDepo.boxDepoimentos}>





            <section className={estiloDepo.boxImagePizza}>


                <Image className={estiloDepo.imgPizza} alt='imagem de uma pizza saborosa' src={pizza} />

            </section>



        
                {
                    arrayDepo.map((infos) => {

                        
                    
                       
                       
                        return (
                
                            <section key={infos.id} className={estiloDepo.boxTxDepoimentos}>
                            <h2>Depoimentos</h2>
                            <p>O que dizem sobre nós ?</p>
                            <div className={estiloDepo.boxAvatarTexto}>
                                <Image className={estiloDepo.avatar} alt='imagem de um cliente' src={infos.img} />
                                <div className={estiloDepo.boxAvaliacao}>
                                    <h3>{infos.nome}</h3>
                                    <div className={estiloDepo.boxStars}>

                                        <div className={estiloDepo.stars}>

                                            {

                                                infos.stars.map((icone , index)=>{

                                                    return(

                                                        <FontAwesomeIcon className={estiloDepo.iconStars} key={index} icon={icons[icone]}/>
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
                                <div className={corBtnDepo === 1 ? estiloDepo.corbtn : null}  onClick={()=> exibirDepoimento(1)}>1</div>
                                <div className={corBtnDepo === 2 ? estiloDepo.corbtn : null} onClick={()=> exibirDepoimento(2)}>2</div>
                                <div className={corBtnDepo === 3 ? estiloDepo.corbtn : null} onClick={()=> exibirDepoimento(3)}>3</div>
                            </div>
                        </section>
                        )
                    })
                }
            

        </section>

    )
}