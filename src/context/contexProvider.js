import context from "./context";
import React , {useEffect, useState} from "react";
import array from "@/dados/dados";



export default function ContextProvider({children}){


   


    const [menuOpen , setMenuOpen] = useState(false)


    const close = {

        height :menuOpen ? '250px' : '0px',
        transition:'all 500ms linear'
    }

    const [ lista , setLista] = useState([])
    const [categorias , setCategorias] = useState()
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


   

    function addCarrinho(id){

        

        setLista(


            listaAtual => listaAtual.map((itens)=>{

                if(itens.id === id){

                    return {

                        count:itens.count + 1

                    }


                }


                return console.log(itens)

            })

        )

        
        
    }  

   


    function extendMenu(){


        setCond(cond === false ? true : false)
  
      }



    function recolherMenu(){

        if(window.innerWidth >= 1040){

            setMenuOpen(false)

        }

    }

    useEffect(()=>{

            window.addEventListener('resize' , recolherMenu)

            exibirCardapio('burger')

            addCarrinho()



            return ()=>{

                window.removeEventListener('resize' , recolherMenu)
            }

    },[])
    

    return (

            <context.Provider

                value={{menuOpen , setMenuOpen , close , lista , exibirCardapio , adicionar , categorias , setCategorias , extendMenu , cond }}
            
            >


            {children}

            </context.Provider>

    )


}