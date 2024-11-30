'use client'
import estiloHeader from './header.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/logosf.png'
import menu from '../../../public/menu.png'
import MenuEscondido from '../menuEscondido/menuEcondido';
import React , {useState , useEffect , useContext} from 'react';
import context from '@/context/context';






export default function Header(){

        const {openMenu} = useContext(context)

        return(

            <section className={estiloHeader.boxHeader}>

                <section className={estiloHeader.boxVisibile}>

                    <Image className={estiloHeader.logo} alt='icone de uma sacola' src={logo}/>
                    <nav className={estiloHeader.navMenu}>
                        <ul>
                            <li>Reservas</li>
                            <li>Serviços</li>
                            <li>Cardápio</li>
                            <li>Depoimentos</li>
                        </ul>
                    </nav>
                    <section className={estiloHeader.boxBag}>
                            <p>Meu Carrinho</p>
                            <div className={estiloHeader.boxIconBag}>
                                <FontAwesomeIcon className={estiloHeader.iconBag} icon={faBagShopping}/>
                            </div>
                    
                    </section>


                    <div onClick={openMenu} className={estiloHeader.MenuLogoEcondido}>

                          <Image alt='imagem de um icone menu' className={estiloHeader.iconMenu} src={menu}/>
                    </div>

                </section>

                
                <MenuEscondido/>

               

            </section>



        )


}