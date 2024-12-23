'use client'


import styles from "./page.module.css";
import Header from "@/components/sectionHeader/header";
import React , {useState , useEffect} from "react";
import ContextProvider from "@/context/contexProvider";
import Apresentacao from "@/components/sectionBanner/banner";
import Servicos from "@/components/section-serviços/servicos";
import Cardapio from "@/components/section-cardapio/cardapio";
import BtnTopo from "@/components/buttonTopo/buttonTopo";
import SacolaCompras from "@/components/sacolaCompras/sacola";
import Depoimentos from "@/components/section_depoimentos/depoientos";
import RevisarPedido from "@/components/section-page-Revisar/revisar";
import Agendamento from "@/components/sectionAgendamento/agendamento";
import Footer from "@/components/footer/fotter";


export default function Home() {

  
 
  return (

    <main>


      <ContextProvider>

     
        
                  <Header/>
                  <Apresentacao/>
                  <Servicos/>
                  <Cardapio/>
                  <Depoimentos/>
                  <Agendamento/>
                  <Footer/>

                  <BtnTopo/>
                  <SacolaCompras/>
        
                  <RevisarPedido/>
    

        

      </ContextProvider>



    </main>


);
       

        
}


     
