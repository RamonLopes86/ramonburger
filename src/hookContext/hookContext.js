import context from "@/context/context";
import { useContext } from "react";



 export default function hookContext(){

    const resultContext = useContext(context)


    if(context === undefined){

        throw Error('erro de contexto')
    }

    return resultContext


}