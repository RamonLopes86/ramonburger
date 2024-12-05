import context from "./context";
import React , {useEffect, useState} from "react";
import array from "@/dados/dados";
import arrayDep from "@/dados/depoimento";








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
    const [corBtnDepo , setCorBtnDepo] = useState('')
    const [pgRevisar , setPgRevisar] = useState(false)


  


    const close = {

        height :menuOpen ? '200px' : '0px',
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
       arrayDepo,
       exibirDepoimento,
       corBtnDepo,
       pgRevisar,
       goPageRevisar,
       excluirItemPedido,
       adcionarPageRevisar
        
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

            

            
        

        
       


    function adcionarPageRevisar(op , id){


    setCarrinho(

        carrinho=> carrinho.map((it)=>{


            if(it.id === id){

                if(op === 'soma'){

                    return{
                        ...it,
                        count:it.count + 1
                    }

                }
                if(op === 'subtrair'){

                    if(it.count <= 1){

                        excluirItemPedido(id)
                      
                         return {
                            ...it,
                            count:0
                         }

                        
                    }else{


                        return{

                            ...it,
                            count:it.count - 1
                        }
                    }


                   


                }

        

            }

            return it;

            
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


        
        setCarrinho((carrinho) => {
            // Verificar se o item já está no carrinho
            
            const itemCarrinho = carrinho.find((produtos) => produtos.id === itemCarrinhoInicial.id);
    
            if (itemCarrinho) {
                // Se o item já existir, atualize a quantidade
                return (
                    carrinho.map((produtos) => {
                        if (produtos.id === itemCarrinhoInicial.id) {
                            return {
                                ...produtos,
                                count: produtos.count + itemCarrinhoInicial.count
                            };
                        }
                        return produtos;
                    })
                );
            } else {
                // Se o item não existir, adicione um novo item ao carrinho
                if(itemCarrinhoInicial.count > 0){

                    return [
                        ...carrinho,
                        { ...itemCarrinhoInicial, count: itemCarrinhoInicial.count }
                    ];
                }else{

                    return [...carrinho]
                    
                }
            }
        });


            


            if(  itemCarrinhoInicial.count > 0 ){

                setTxMsg('item adicionado ao carrinho')
                setAlertMsg(true)
                setMostrarSacola(true)
                setCorAlert(false)
                


              setTimeout(()=>{

                    setAlertMsg(false)
                    itemCarrinhoInicial.count = 0
                   

                    

                },1500)


              

              
                
            }else{

                setTxMsg('adicione ao menos um item')
                setAlertMsg(true)
                setCorAlert(true)
              

                setTimeout(()=>{

                    setAlertMsg(false)
                   

                },1500)


             

            }

           
         
        
        }
            

       






    function  exibirDepoimento(paramDep){

        const filtroDepo = arrayDep.filter((info)=>{


            return info.id === paramDep

        })


        setArrayDepo(filtroDepo)
        setCorBtnDepo(paramDep)


    }


    function goPageRevisar(){


        setPgRevisar(estadoAtual => !estadoAtual)

        
        const m = carrinho.some((i)=>{

           return i.count > 0

        })


        setMostrarSacola(m)

    }
       




    function excluirItemPedido(id){

         setCarrinho(

            carrinho.filter((itens)=>

                itens.id !== id
   
   
           )
   

         )


    }
       
    


    useEffect(()=>{

            window.addEventListener('resize' , recolherMenu)

            exibirCardapio('burger')
            
            exibirDepoimento(1)
        



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