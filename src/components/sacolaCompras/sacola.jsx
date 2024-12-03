import estiloSac from './sacola.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import hookContext from '@/hookContext/hookContext';



export default function SacolaCompras(){

      
        const {carrinho , mostrarSacola} = hookContext()

        const itensSomados = carrinho.map((itens)=>{

                return itens.count

        }).reduce((acc , it)=>{


            return acc + it

        },0)


    
        return(


            mostrarSacola && (

                <button className={estiloSac.btnSacola}>
                    
                <FontAwesomeIcon className={estiloSac.iconSacola} icon={faBagShopping}/>

                        <p className={estiloSac.contador}>
                            {
                            itensSomados
                            } 
                        </p>

                </button>
                
            )

            )

            }
            
            
               


            




        


            
            
            

