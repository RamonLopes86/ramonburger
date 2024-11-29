

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/sectionHeader/header";


export default function Home() {



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

        <Header/>

        
    </main>
  );
}
