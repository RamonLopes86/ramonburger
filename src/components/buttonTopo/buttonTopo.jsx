import estiloBtnToppo from './button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


export default function BtnTopo() {

    return (

       

           <Link href={'#idheader'} className={estiloBtnToppo.linkTopo}>
           
           <button className={estiloBtnToppo.button}><FontAwesomeIcon className={estiloBtnToppo.iconBtnTopo} icon={faArrowRight} /></button>
           
           </Link>

     

    )
}