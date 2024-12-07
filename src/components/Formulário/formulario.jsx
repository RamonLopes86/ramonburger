import estiloFor from './formulario.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import estados from '@/dados/dadosEstados';
import hookContext from '@/hookContext/hookContext';






export default function Formulario() {



    const { inputCep, setInputCep, exibirCep ,  localidade , bairro , logradouro , setLocalidade , setBairro , setLogradouro } = hookContext()



    
   

    return (


        <section className={estiloFor.boxFormulario}>



            <section className={estiloFor.boxFilhoForm}>


            

                <label htmlFor="idcep">
                    Cep
                    <div className={estiloFor.boxBusca}>

                        <input value={inputCep === undefined ? '' : inputCep} onChange={(ev) => setInputCep(ev.target.value)} autoComplete='off' type="text" name="cep" id="idcep" />


                        <FontAwesomeIcon onClick={exibirCep} className={estiloFor.iconLupa} icon={faMagnifyingGlass} />

                    </div>
                </label>


                <label htmlFor="idendereco">
                    Endereço
                    <input onChange={(ev)=> setLogradouro(ev.target.value)} value={logradouro}  autoComplete='off' type="text" name="endereco" id="idendereco" />
                </label>

                <label htmlFor="idbairro">
                    Bairro
                    <input onChange={(ev)=> setBairro(ev.target.value)} value={bairro}    autoComplete='off' type="text" name="endereco" id="idbairro" />
                </label>

                <label htmlFor="idnumero">
                    Número
                    <input autoComplete='off' type="text" name="idnumero" id="idnumero" />
                </label>

                <label htmlFor="idcidade">
                    Cidade
                    <input onChange={(ev)=> setLocalidade(ev.target.value)} value={localidade}  autoComplete='off' type="text" name="cidade" id="idcidade" />
                </label>

                <label htmlFor="idcomplemento">
                    Complemento
                    <input autoComplete='off' type="text" name="complemento" id="idcomplemento" />
                </label>

                <label htmlFor="iduf">
                    UF
                    <select name="uf" id="iduf">

                        {

                            estados.map((sigla, index) => {

                                return (

                                    <option key={index} selected={sigla[28]} className={estiloFor.listaEstados} value={sigla}>{sigla}</option>

                                )

                            })

                        }


                    </select>

                </label>


                


            </section>



        </section>
                










    )

}