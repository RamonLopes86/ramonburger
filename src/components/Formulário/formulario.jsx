import estiloFor from './formulario.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import estados from '@/dados/dadosEstados';
import hookContext from '@/hookContext/hookContext';





export default function Formulario() {



    const {inputCep , setInputCep} = hookContext()






    return (


        <section className={estiloFor.boxFormulario}>



            <section className={estiloFor.boxFilhoForm}>

                <label htmlFor="idcep">
                    Cep
                    <div className={estiloFor.boxBusca}>

                        <input value={inputCep} onChange={({target})=> setInputCep(target.value)} autoComplete='off'  type="text" name="cep" id="idcep" />


                        <FontAwesomeIcon className={estiloFor.iconLupa} icon={faMagnifyingGlass} />

                    </div>
                </label>


                <label htmlFor="idendereco">
                    Endereço
                    <input autoComplete='off' type="text" name="endereco" id="idendereco" />
                </label>

                <label htmlFor="idbairro">
                    Bairro
                    <input autoComplete='off' type="text" name="endereco" id="idbairro" />
                </label>

                <label htmlFor="idnumero">
                    Número
                    <input autoComplete='off' type="text" name="idnumero" id="idnumero" />
                </label>

                <label htmlFor="idcidade">
                    Cidade
                    <input autoComplete='off' type="text" name="cidade" id="idcidade" />
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