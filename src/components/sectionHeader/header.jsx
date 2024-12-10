'use client'
import estiloHeader from './header.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/logosf.png'
import MenuEscondido from '../menuEscondido/menuEcondido';
import hookContext from '@/hookContext/hookContext';
import Link from 'next/link';









export default function Header(){


    const {setMenuOpen , carrinho , mostrarSacola , goPageRevisar} = hookContext()


    function exibirMenu(){

        setMenuOpen(estadoAtual => !estadoAtual)

    }


    const itensSomados = carrinho.reduce((acc , itens)=> {

       return acc + itens.count

    },0)
    

    console.log(itensSomados)

        return(

            <section id='idHeader' className={estiloHeader.boxHeader}>

                <section className={estiloHeader.boxVisibile}>


                    <Image className={estiloHeader.logo} alt='logo do food on-line' src={logo}/>
                    
                    <nav className={estiloHeader.navMenu}>
                        <ul>
                            <Link href={'#idagendamento'}>
                                <li>Reservas</li>
                            </Link>
                            <Link href={'#idservico'}>
                                <li>Serviços</li>
                            </Link>
                            <Link href={'#idcardapio'}>
                                <li>Cardápio</li>
                            </Link>
                            <Link href={'#iddepoimentos'}>
                                <li>Depoimentos</li>
                            </Link>
                        </ul>
                    </nav>
                    <section onClick={goPageRevisar} className={estiloHeader.boxBag}>
                            <p>Meu Carrinho</p>
                            <div className={estiloHeader.boxIconBag}>

                                {
                                    mostrarSacola &&  <p className={estiloHeader.countBag}>{itensSomados}</p>
                                }

                                <FontAwesomeIcon className={estiloHeader.iconBag} icon={faBagShopping}/>
                            </div>
                    
                    </section>


                    <div onClick={exibirMenu} className={estiloHeader.MenuLogoEcondido}>

                        
                          <div className={estiloHeader.boxGrid}>
                              <div className={estiloHeader.quadrado}></div>
                              <div className={estiloHeader.quadrado}></div>
                              <div className={estiloHeader.quadrado}></div>
                              <div className={estiloHeader.quadrado}></div>
                          </div>
                    </div>

                </section>

                
                <MenuEscondido/>

               

            </section>



        )


}