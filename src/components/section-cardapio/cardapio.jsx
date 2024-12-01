import estiloCardapio from './cardapio.module.css';
import React , {useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger , faPizzaSlice , faDrumstickBite  ,faBacon , faMartiniGlassCitrus , faIceCream} from '@fortawesome/free-solid-svg-icons';
import array from '@/dados/dados';
import Image from 'next/image';




export default function Cardapio(){

    const [ lista , setLista] = useState([])

    const [categorias , setCategorias] = useState()


    function exibircategoria(categ){

      return  setCategorias(categ)

    }



    let filtro;

    function exibirCardapio(param){


       if(param === 'burger'){

         filtro = array.filter((itens)=>
        
        
            itens.classe === 'burger'
        
        )


        }
        



       if(param === 'pizza'){

        filtro = array.filter((itens)=>
        
        
            itens.classe === 'pizza'

        )

       }


       if(param === 'carne'){

        filtro = array.filter((itens)=>
        
        
            itens.classe === 'carne'

        )

        }

        if(param === 'doce'){

            filtro = array.filter((itens)=>
            
            
                itens.classe === 'doce'
    
            )
    
            }

        if(param === 'bebida'){

            filtro = array.filter((itens)=>
            
            
                itens.classe === 'bebida'
    
            )
    
            }
    

       return setLista(filtro)


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

                <button onClick={()=>exibirCardapio('burger')}><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faBurger}/> Burger</button>
                <button onClick={()=>exibirCardapio('pizza')}><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faPizzaSlice}/>Pizza</button>
                <button onClick={()=>exibirCardapio('carne')}><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faDrumstickBite}/>Churrasco</button>
                <button onClick={()=>exibirCardapio('doce')}><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faIceCream} />Doces</button>
                <button onClick={()=>exibirCardapio('bebida')}><FontAwesomeIcon className={estiloCardapio.iconButton} icon={faMartiniGlassCitrus}/>Bebidas</button>


            </div>


            <section className={estiloCardapio.cardapio}>

                    {

                    lista.map((itens)=>{

                            return(

                                <div key={itens.id} className={estiloCardapio.card}>

                                <Image className={estiloCardapio.imageProdutos} alt={itens.nome} src={itens.img} />
                                <p>{itens.nome}</p>
                                <p>{itens.preco}</p>
    
    
                            </div>

                            )

                    })

                    }


            </section>





        </section>


    )

}