import context from "./context";
import React , {useEffect, useState} from "react";
import array from "@/dados/dados";
import arrayDep from "@/dados/depoimento";
import Cardapio from "@/components/section-cardapio/cardapio";
import hookContext from "@/hookContext/hookContext";





export default function ContextProvider({children}){



    const [menuOpen , setMenuOpen] = useState(false)
    const [ lista , setLista] = useState([])
    const [categorias , setCategorias] = useState()
    const [cond , setCond] = useState(false)
    const [carrinho , setCarrinho] = useState([])
    const [mostrarSacola , setMostrarSacola] = useState(false)
    const [txMsg , setTxMsg] = useState(null)
    const [alertMsg , setAlertMsg] = useState(false)
    const [corAlert , setCorAlert] = useState(false)
    const [arrayDepo , setArrayDepo] = useState([])

  


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
        adcionarAoCarrinho,
        mostrarSacola,
        setMostrarSacola,
        txMsg,
       alertMsg,
       corAlert,
       arrayDepo
        
       
    
       
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


    function adcionarAoCarrinho(itemCarrinhoInicial){


        setCarrinho(

            carrinho =>{

                return carrinho.concat({...itemCarrinhoInicial , count:itemCarrinhoInicial.count})
            },

          

        )


            if(  itemCarrinhoInicial.count > 0 ){

                setTxMsg('item adicionado ao carrinho')
                setAlertMsg(true)
                setMostrarSacola(true)
                setCorAlert(false)
                


              setTimeout(()=>{

                    setAlertMsg(false)

                },1500)


                
            }else{

                setTxMsg('adicione ao menos um item')
                setAlertMsg(true)
                setCorAlert(true)
               

                setTimeout(()=>{

                    setAlertMsg(false)

                },1500)

            }

           
              

        
            

        // setCarrinho((carrinhoAtual)=> {

        //     // return[...carrinhoAtual , {...itemCarrinhoInicial , count:item.count}]
            
        //     // return carrinhoAtual.concat({...itemCarrinhoInicial , count:itemCarrinhoInicial.count})


          


        //     // const itemCarrinho = carrinhoAtual.find((produtos)=>{

        //     //     produtos.id === item.id

        //     // })


        //     // if(itemCarrinho){

        //     //     return(

        //     //         carrinhoAtual.map((produtos)=>{

        //     //             if(produtos.id === item.id){


        //     //                 return console.log(produtos.count)

        //     //                 // return{...produtos , count: 1 + item.count}

        //     //             }  
                        
                        

        //     //         })

                  

        //     //     )

        //     // }else{

        //     //     return[...carrinhoAtual , {...item , count:item.count}]

        //     // }

           
        // })


    }



    function  exibirDepoiento(param){

        const filtroDepo = arrayDep.filter((info)=>{


            return info.id === param

        })


        setArrayDepo(filtroDepo)


    }
         


    useEffect(()=>{

            window.addEventListener('resize' , recolherMenu)

            exibirCardapio('burger')
            
            exibirDepoiento('1')
        



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