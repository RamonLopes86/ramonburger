'use client'

import Image from "next/image";
import styles from "./page.module.css";
import React , {useState , useEffect} from "react";
import array from "@/dados/dados";







export default function Home() {



  const [lista , setLista] = useState([])


 

 
  
  let filtro;

  function exibirBebidas(param){
   

      if(param === 'bebida'){

     filtro =  array.filter((itens)=>{
   
           return    itens.classe === 'bebida'
     
     
         })
     
     
         setLista(filtro)
         
   
       }


  
 

    if(param === 'burger'){

       filtro =  array.filter((itens)=>{

        return    itens.classe === 'burger'
  
  
      })
  
  
      setLista(filtro)


    }

}


useEffect(()=>{

  exibirBebidas('burger')

},[])


 
  return (


    <main>

      <button  onClick={()=>exibirBebidas('bebida')}>bebidas</button>
      
      <button onClick={()=>exibirBebidas('burger')}>burger</button>

        {

          lista.map((itens)=>{

             return(

              <div key={itens.id}>
                   <Image alt="imagens de bebida" src={itens.img}/>
                   <p>{itens.nome}</p>
              </div>

             )


          })
         

        }
     
        
    </main>
  );
}
