import context from "./context";
import React , {useEffect, useState} from "react";



export default function ContextProvider({children}){



    const [menuOpen , setMenuOpen] = useState(false)

    const close = {

        height :menuOpen ? '250px' : '0px',
        transition:'all 500ms linear'
    }


    function recolherMenu(){

        if(window.innerWidth >= 1040){

            setMenuOpen(false)

        }

    }

    useEffect(()=>{

            window.addEventListener('resize' , recolherMenu)


            return ()=>{

                window.removeEventListener('resize' . recolherMenu)
            }

    },[])
    

    return (

            <context.Provider

                value={{menuOpen , setMenuOpen , close}}
            
            >


            {children}

            </context.Provider>

    )


}