import estiloServ from './servicos.module.css';
import Image from 'next/image';
import send from '../../../public/send.png';
import food from '../../../public/food.png';
import cel from '../../../public/cel.png';




export default function Servicos(){


    return(

        <section className={estiloServ.boxServicos}>

            <h1>serviços</h1>

            <p>Como são nossos serviços ?</p>

           <section className={estiloServ.boximgServ}>

                <div className={estiloServ.boxCardServ}>

                    <Image  alt='imagem de um entregador' className={estiloServ.imageServ} src={send}/>
                    
                    <h2>Entrega rápida</h2>
                    <p>Nossa entrega é sempre pontual, rápida e segura.</p>
                </div>

                <div className={estiloServ.boxCardServ}>
                    <Image  alt='imagem de lanches' className={estiloServ.imageServ} src={food}/>
                    <h2>Melhor qualidade</h2>
                    <p>Não só a rapidez na entrega, a qualidade também é o nosso forte.</p>
                </div>

                <div className={estiloServ.boxCardServ}>
                    <Image  alt='imagem de um celular' className={estiloServ.imageServ} src={cel}/>
                    <h2>Fácil de pedir</h2>
                    <p>Você só precisa de alguns passos para pedir sua comida.</p>
                    
                </div>

           </section>

           

        </section>

    )


}