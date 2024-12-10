import estiloFor from './formulario.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import estados from '@/dados/dadosEstados';
import hookContext from '@/hookContext/hookContext';






export default function Formulario() {



    const { inputCep, setInputCep, exibirCep ,  localidade , bairro , logradouro , setLocalidade , setBairro , setLogradouro , numero , setNumero , complemento , setComplemento , estadosSelect , setEstadosSelect } = hookContext()



    
   

    return (


        <section className={estiloFor.boxFormulario}>



            <section className={estiloFor.boxFilhoForm}>


            

                <label htmlFor="idcep">
                    Cep
                    <div className={estiloFor.boxBusca}>

                        <input value={inputCep || ''} onChange={(ev) => setInputCep(ev.target.value)} autoComplete='off' type="text" name="cep" id="idcep" />


                        <FontAwesomeIcon onClick={exibirCep} className={estiloFor.iconLupa} icon={faMagnifyingGlass} />

                    </div>
                </label>


                <label htmlFor="idendereco">
                    Endereço
                    <input value={logradouro} onChange={(ev)=>setLogradouro(ev.target.value)}   autoComplete='off' type="text" name="endereco" id="idendereco" />
                </label>

                <label htmlFor="idbairro">
                    Bairro
                    <input value={bairro} onChange={(ev)=> setBairro(ev.target.value)}     autoComplete='off' type="text" name="endereco" id="idbairro" />
                </label>

                <label htmlFor="idnumero">
                    Número
                    <input value={numero} onChange={(ev)=> setNumero(ev.target.value)} autoComplete='off' type="text" name="idnumero" id="idnumero" />
                </label>

                <label htmlFor="idcidade">
                    Cidade
                    <input  value={localidade} onChange={(ev)=> setLocalidade(ev.target.value)}  autoComplete='off' type="text" name="cidade" id="idcidade" />
                </label>

                <label htmlFor="idcomplemento">
                    Complemento
                    <input value={complemento} onChange={(ev)=> setComplemento(ev.target.value)} autoComplete='off' type="text" name="complemento" id="idcomplemento" />
                </label>

                <label htmlFor="iduf">
                    UF
                    <select onChange={(ev)=> setEstadosSelect(ev.target.value)} value={estadosSelect}  name="uf" id="iduf">

                        {

                            estados.map((sigla, index) => {

                                return (

                                    <option key={index}  className={estiloFor.listaEstados} value={sigla}>{sigla}</option>

                                )

                            })

                        }


                    </select>

                </label>


                


            </section>



        </section>
                










    )

}