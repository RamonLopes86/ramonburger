import context from "./context";
import React , {useEffect, useState} from "react";
import array from "@/dados/dados";
import Cardapio from "@/components/section-cardapio/cardapio";




export default function ContextProvider({children}){



    const [menuOpen , setMenuOpen] = useState(false)
    const [ lista , setLista] = useState([])
    const [categorias , setCategorias] = useState()
    const [cond , setCond] = useState(false)

    const [carrinho , setCarrinho] = useState([])

  


    const close = {

        height :menuOpen ? '250px' : '0px',
        transition:'all 500ms linear'
    }


    const value = {

        menuOpen , 
        setMenuOpen,
        close,
        lista ,
        exibirCardapio ,
        adicionar ,
        categorias , 
        setCategorias , 
        extendMenu , 
        cond,
        carrinho,
        setCarrinho,
        adcionarAoCarrinho
       
           
        }
    

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


        setCond(

            estadoAtual => !estadoAtual

        )
  
      }



    function recolherMenu(){

        if(window.innerWidth >= 1040){

            setMenuOpen(false)

        }

    }


    function adcionarAoCarrinho(item){


        setCarrinho((carrinhoAtual)=> {

            
            const itemCarrinho = carrinhoAtual.find((produtos)=>{

                produtos.id === item.id

            })


            if(itemCarrinho){

                return(

                    carrinhoAtual.map((produtos)=>{

                        if(produtos.id === item.id){

                            return{...produtos , count:produtos.count + item.count}

                        }  
                        
                        

                    })

                )

            }else{

                return[...carrinhoAtual , {...item , count:item.count}]

            }


        })


          

    }
         

           

            





    useEffect(()=>{

            window.addEventListener('resize' , recolherMenu)

            exibirCardapio('burger')

        



            return ()=>{

                window.removeEventListener('resize' , recolherMenu)
            }

    },[])
    

    return (

            <context.Provider
            value={value}
            >

            {children}
            

            </context.Provider>

    )


}