import estiloCardapio from './cardapio.module.css';
import React , {useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger , faPizzaSlice , faDrumstickBite  ,faBagShopping , faMartiniGlassCitrus , faIceCream , faArrowRight} from '@fortawesome/free-solid-svg-icons';
import array from '@/dados/dados';
import Image from 'next/image';





export default function Cardapio(){

    const [ lista , setLista] = useState([])

    const [categorias , setCategorias] = useState()

    const [showSlice , setShowSlice] = useState(4)
    
    const [textBtnMostrar , setTxtBtnMostrar] = useState('ver mais')
    
    const [mudaSeta , setMudaSeta] = useState(null)

    const [cond , setCond] = useState(false)


    function exibirCardapio(param){

        const filtro = array.filter((info)=>{


            return info.classe === param

        })


      const res =   filtro.map((itens)=>{

            return {

                ...itens, 
                count:0
            }

                

            

        })

       
        setLista(res)
       
        setCategorias(param)


    }


    

    function adicionar(op , id){


        setLista(

            listaAtual => listaAtual.map((itens)=>{

                if(itens.id === id){

                    if(op === 'soma'){

                        return {

                            ...itens,
                            count:itens.count + 1
                        }

                    }

                    if(op === 'subtrair'){

                        return{

                            ...itens,
                            count: itens.count <= 0 ? 0 : itens.count - 1

                        }
                    }

                    
                }

                return itens;

            })

            
        
        )

        
       
    }



    function extendMenu(){


      setCond(cond === false ? true : false)

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


            <section className={`${estiloCardapio.cardapio}`} >

                    {

                    lista.map((itens)=>{

                            return(

                                <div  key={itens.id} className={estiloCardapio.card}>

                                    <div className={estiloCardapio.boxInfo}>

                                        <Image  className={estiloCardapio.imageProdutos} alt={itens.nome} src={itens.img} />
                                        <div className={estiloCardapio.boxTx}>
                                            <p>{itens.nome}</p>
                                            <p>R$ {itens.preco}</p>
                                        </div>

                                    
                                        <div className={estiloCardapio.boxHidden}>

                                        
                                            <div className={estiloCardapio.control}>

                                                <button onClick={()=>adicionar('subtrair' , itens.id)}>-</button>
                                                <p>{itens.count}</p>
                                                <button onClick={()=> adicionar('soma' , itens.id)}>+</button>
                                              

                                            </div>

                                          
                                               

                                        </div>
                                      




                                    </div>


                                    <FontAwesomeIcon className={estiloCardapio.iconEscondido} icon={faBagShopping}/>
                                  
    
                                </div>

                                
    

                            )

                    }).splice(0, cond ? 50 : 4)

                    }


            </section>


                    <div className={estiloCardapio.boxMostrarMais}>
                        
                        <button onClick={extendMenu} className={estiloCardapio.btnMostrar}>{cond ? 'ver menos' : 'ver mais'}<FontAwesomeIcon className={`${estiloCardapio.iconSeta} ${cond ? estiloCardapio.setaRotate : null}`} icon={faArrowRight}/> </button>
                    
                    </div>


        </section>


    )

}