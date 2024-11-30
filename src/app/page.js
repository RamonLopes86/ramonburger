'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/sectionHeader/header";
import React , {useState , useEffect} from "react";
import context from '@/context/context';


export default function Home() {

  const [menuOpen , setMenuOpen] = useState(styles.navClose)


  function openMenu(){


      setMenuOpen(menuOpen === styles.navClose ? styles.navOpen : styles.navClose)

  }

//   const [lista , setLista] = useState([])

//   const [botaoAtivo , setBotaoAtivo] = useState(null)

 
  

 
  
//   let filtro;

//   function exibirBebidas(param){
   

//       if(param === 'bebida'){

//      filtro =  array.filter((itens)=>{
   
//            return    itens.classe === 'bebida'
     
     
//          })
     
     
//          setLista(filtro)
//          setBotaoAtivo('bebida')
        
     
//       }
         
      
//     if(param === 'burger'){

//        filtro =  array.filter((itens)=>{

//         return    itens.classe === 'burger'
  
  
//       })
  
//       setLista(filtro)
//       setBotaoAtivo('burger')
      
     
//     }


//   }



// useEffect(()=>{

//   exibirBebidas('burger')

// },[])


 
  return (

    <main>

      <context.Provider

        value={{menuOpen , setMenuOpen , openMenu}}
      >

      <Header/>

      </context.Provider>
       

        
    </main>
  );
}
