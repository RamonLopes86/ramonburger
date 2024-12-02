import estiloSac from './sacola.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import hookContext from '@/hookContext/hookContext';


export default function SacolaCompras(){

        const {addCarrinho} = hookContext()



        return(

            
            <button className={estiloSac.btnSacola}>
                
            <FontAwesomeIcon className={estiloSac.iconSacola} icon={faBagShopping}/>

           

                {

                    addCarrinho.map((info , index)=>{

                        
                        return (

                            <p key={index} className={estiloSac.contador}>

                                {console.log(info)}
                            </p>

                        )

                    })

                }


               


        

            </button>

            
            
            


        )

}