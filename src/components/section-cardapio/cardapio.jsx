import estiloCardapio from './cardapio.module.css';
import React , {useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger , faPizzaSlice , faDrumstickBite  ,faBagShopping , faMartiniGlassCitrus , faIceCream} from '@fortawesome/free-solid-svg-icons';
import array from '@/dados/dados';
import Image from 'next/image';
import { cacheTag } from 'next/dist/server/use-cache/cache-tag';




export default function Cardapio(){

    const [ lista , setLista] = useState([])

    const [categorias , setCategorias] = useState()

    const [count , setCount] = useState(0)


   




    function exibirCardapio(param){



       return (


        setLista(

            array.filter((info)=>
            
                
                info.classe === param
            
            )
    
    
           ),


           setCategorias(param)

       )


       


    }


    useEffect(()=>{


        exibirCardapio('burger')

    },[])




    return(

        <section className={estiloCardapio.boxCardapio}>
            
            <section className={estiloCardapio.boxTitulo}>

                <h1>Cardápio</h1>
                <p>Conheça o nosso cardápio</p>

            </section>


            <div className={estiloCardapio.boxButton}>

                <button className={categorias === 'burger' ? estiloCardapio.mudaCor : estiloCardapio.mudaCorOff} onClick={()=>exibirCardapio('burger')}><FontAwesomeIcon className={`${estiloCardapio.iconButton}  `} icon={faBurger}/> Burger</button>
                <button className={categorias === 'pizza' ? estiloCardapio.mudaCor : estiloCardapio.mudaCorOff}   onClick={()=>exibirCardapio('pizza')}><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faPizzaSlice}/>Pizza</button>
                <button className={categorias === 'carne' ? estiloCardapio.mudaCor : estiloCardapio.mudaCorOff}  onClick={()=>exibirCardapio('carne')}><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faDrumstickBite}/>Churrasco</button>
                <button className={categorias === 'doce' ? estiloCardapio.mudaCor : estiloCardapio.mudaCorOff} onClick={()=>exibirCardapio('doce')}><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faIceCream} />Doces</button>
                <button className={categorias === 'bebida' ? estiloCardapio.mudaCor : estiloCardapio.mudaCorOff} onClick={()=>exibirCardapio('bebida')}><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faMartiniGlassCitrus}/>Bebidas</button>


            </div>


            <section className={estiloCardapio.cardapio}>

                    {

                    lista.map((itens)=>{

                            return(

                                <div key={itens.id} className={estiloCardapio.card}>

                                    <div className={estiloCardapio.boxInfo}>

                                        <Image  className={estiloCardapio.imageProdutos} alt={itens.nome} src={itens.img} />
                                        <div className={estiloCardapio.boxTx}>
                                            <p>{itens.nome}</p>
                                            <p>R$ {itens.preco}</p>
                                        </div>

                                    
                                        <div className={estiloCardapio.boxHidden}>

                                        
                                            <div className={estiloCardapio.control}>

                                                <button>-</button>
                                                <p>{count}</p>
                                                <button>+</button>
                                              

                                            </div>

                                          
                                               

                                        </div>
                                      




                                    </div>


                                    <FontAwesomeIcon className={estiloCardapio.iconEscondido} icon={faBagShopping}/>
                                  
    
                                </div>

                                
    

                            )

                    })

                    }


            </section>





        </section>


    )

}