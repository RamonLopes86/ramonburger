import context from "./context";
import React, { useEffect, useState , useRef } from "react";
import array from "@/dados/dados";
import arrayDep from "@/dados/depoimento";
import axios from "axios";

export default function ContextProvider({ children }) {



    const [menuOpen, setMenuOpen] = useState(false)
    const [lista, setLista] = useState([])
    const [categorias, setCategorias] = useState()
    const [cond, setCond] = useState(false)
    const [carrinho, setCarrinho] = useState([])
    const [mostrarSacola, setMostrarSacola] = useState(false)
    const [txMsg, setTxMsg] = useState(null)
    const [alertMsg, setAlertMsg] = useState(false)
    const [corAlert, setCorAlert] = useState(false)
    const [arrayDepo, setArrayDepo] = useState([])
    const [corBtnDepo, setCorBtnDepo] = useState('')
    const [pgRevisar, setPgRevisar] = useState(false)
    const [pgEndereco, setPageEndereco] = useState(false)
    const [pgEnviarPedido, setEnviarPedido] = useState(false)
    const [btnVoltar, setBtnVoltar] = useState(false)
    const [inputCep, setInputCep] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [animaAlertCep, setAnimaAlertCep] = useState(false)
    const [msgAlertCep, setMsgAlertCep] = useState('')
    const [styleMsgCep, setStyleMsgCep] = useState()
    const [alterNomeContinuar, setAlterNomeContinuar] = useState('Continuar')
    const [estadosSelect, setEstadosSelect] = useState('...')
    const [animaAgenda , setAnimaAgenda] = useState(false)
    const [animaImgAgenda , setAnimaImgAgenda] = useState(false)
    const boxTxRef = useRef()
    const boxImgRef = useRef()






    const close = {

        height: menuOpen ? '200px' : '0px',
        transition: 'all 200ms linear'
    }


   



    const value = {

        menuOpen,
        setMenuOpen,
        close,
        lista,
        exibirCardapio,
        adicionar,
        categorias,
        setCategorias,
        extendMenu,
        cond,
        carrinho,
        setCarrinho,
        adcionarAoCarrinho,
        mostrarSacola,
        setMostrarSacola,
        txMsg,
        alertMsg,
        corAlert,
        arrayDepo,
        exibirDepoimento,
        corBtnDepo,
        pgRevisar,
        goPageRevisar,
        excluirItemPedido,
        adcionarPageRevisar,
        pgEndereco,
        goPageEndereco,
        btnVoltar,
        goBack,
        goBackEndereco,
        inputCep,
        setInputCep,
        exibirCep,
        localidade,
        bairro,
        logradouro,
        setBairro,
        setLogradouro,
        setLocalidade,
        animaAlertCep,
        msgAlertCep,
        styleMsgCep,
        alterNomeContinuar,
        pgEnviarPedido,
        goBackPedido,
        numero,
        complemento,
        setNumero,
        setComplemento,
        estadosSelect,
        setEstadosSelect,
        boxTxRef,
        boxImgRef,
        animaAgenda,
        animaImgAgenda



    }



    function exibirCardapio(param) {

        const filtro = array.filter((info) => {


            return info.classe === param

        })


        const res = filtro.map((itens) => {

            return {

                ...itens,
                count: 0
            }


        })


        setLista(res)

        setCategorias(param)


    }



    function adicionar(op, id) {


        setLista(

            listaAtual => listaAtual.map((itens) => {

                if (itens.id === id) {

                    if (op === 'soma') {

                        return {

                            ...itens,
                            count: itens.count + 1
                        }

                    }

                    if (op === 'subtrair') {


                        return {

                            ...itens,
                            count: itens.count <= 0 ? 0 : itens.count - 1

                        }





                    }


                }

                return itens;



            })



        )

    }


    function adcionarPageRevisar(op, id) {


        setCarrinho(

            carrinho => carrinho.map((it) => {


                if (it.id === id) {

                    if (op === 'soma') {

                        return {
                            ...it,
                            count: it.count + 1
                        }

                    }
                    if (op === 'subtrair') {

                        if (it.count <= 1) {

                            excluirItemPedido(id)

                            return {
                                ...it,
                                count: 0
                            }


                        } else {


                            return {

                                ...it,
                                count: it.count - 1
                            }
                        }





                    }



                }

                return it;


            })

        )


    }



    function extendMenu() {


        setCond(

            estadoAtual => !estadoAtual

        )

    }



    function recolherMenu() {

        if (window.innerWidth >= 1040) {

            setMenuOpen(false)

        }

    }


    function adcionarAoCarrinho(itemCarrinhoInicial) {



        setCarrinho((carrinho) => {
            // Verificar se o item já está no carrinho

            const itemCarrinho = carrinho.find((produtos) => produtos.id === itemCarrinhoInicial.id);

            if (itemCarrinho) {
                // Se o item já existir, atualize a quantidade
                return (
                    carrinho.map((produtos) => {
                        if (produtos.id === itemCarrinhoInicial.id) {
                            return {
                                ...produtos,
                                count: produtos.count + itemCarrinhoInicial.count
                            };
                        }
                        return produtos;
                    })
                );
            } else {
                // Se o item não existir, adicione um novo item ao carrinho
                if (itemCarrinhoInicial.count > 0) {

                    return [
                        ...carrinho,
                        { ...itemCarrinhoInicial, count: itemCarrinhoInicial.count }
                    ];
                } else {

                    return [...carrinho]

                }
            }
        });





        if (itemCarrinhoInicial.count > 0) {

            setTxMsg('item adicionado ao carrinho')
            setAlertMsg(true)
            setMostrarSacola(true)
            setCorAlert(false)



            setTimeout(() => {

                setAlertMsg(false)
                itemCarrinhoInicial.count = 0




            }, 1500)






        } else {

            setTxMsg('adicione ao menos um item')
            setAlertMsg(true)
            setCorAlert(true)


            setTimeout(() => {

                setAlertMsg(false)


            }, 1500)




        }




    }



    function exibirDepoimento(paramDep) {

        const filtroDepo = arrayDep.filter((info) => {


            return info.id === paramDep

        })


        setArrayDepo(filtroDepo)
        setCorBtnDepo(paramDep)


    }


    function goPageRevisar() {




        setPgRevisar(estadoAtual => !estadoAtual)



        setMostrarSacola(carrinho.some((i) => {

            return i.count > 0

        }))



        setBtnVoltar(false)
        setAlterNomeContinuar('Continuar')




    }


    function goPageEndereco() {


        if (pgEndereco === false) {

            setPageEndereco(true)
        }

        if (carrinho.length === 0) {
            setPgRevisar(true)
            setPageEndereco(false)
            setBtnVoltar(false)
            setAnimaAlertCep(true)
            setMsgAlertCep('Carrinho vazio : (')
            setStyleMsgCep(false)
            setAlterNomeContinuar('Continuar')


            setTimeout(() => {

                setAnimaAlertCep(false)

            }, 2000)


        } else {

            setBtnVoltar(true)
            setAlterNomeContinuar('Revisar pedido')
        }


        if (pgEndereco) {

            setEnviarPedido(true)

            if (inputCep === '') {

                setPageEndereco(true)
                setEnviarPedido(false)

                setAnimaAlertCep(true)
                setMsgAlertCep('Preencha um CEP')
                setStyleMsgCep(true)


                setTimeout(() => {

                    setStyleMsgCep(false)

                }, 2000)

            }


            if (!numero || !complemento || !localidade || !bairro || !logradouro) {

                setAnimaAlertCep(true)
                setMsgAlertCep('Preencha os campos que faltam')
                setStyleMsgCep(true)


                setTimeout(() => {

                    setAnimaAlertCep(false)

                }, 2000)


                setPageEndereco(true)
                setEnviarPedido(false)

            }


            if (estadosSelect == '...') {

                setAnimaAlertCep(true)
                setMsgAlertCep('Preencha os campos que faltam')
                setStyleMsgCep(true)
                setPageEndereco(true)
                setEnviarPedido(false)

                setTimeout(() => {

                    setAnimaAlertCep(false)

                }, 2000)


            }


            if (numero.length > 0 && !/^\d+$/.test(numero)) {


                setAnimaAlertCep(true)
                setMsgAlertCep('o campo so aceita numero')
                setStyleMsgCep(true)
                setPageEndereco(true)
                setEnviarPedido(false)

                setTimeout(() => {

                    setAnimaAlertCep(false)

                }, 2000)

            }



        }

    }



    function goBack() {

        if (pgRevisar === false) {

            setPgRevisar(true)
            setBtnVoltar(false)


        }

        if (pgEndereco) {


            setPageEndereco(false)
            setBtnVoltar(false)
            setAlterNomeContinuar('Continuar')
        }


        if (pgEnviarPedido) {

            setEnviarPedido(false)
            setPageEndereco(true)
            setBtnVoltar(true)
        }


    }


    function goBackEndereco() {

        if (pgEndereco) {


            setPageEndereco(false)
        }

        if (pgRevisar) {

            setPgRevisar(false)
        }


    }


    function goBackPedido() {


        if (pgEnviarPedido) {

            setEnviarPedido(false)
            setPageEndereco(false)
            setPgRevisar(false)

        }

    }


    function excluirItemPedido(id) {

        setCarrinho(

            carrinho.filter((itens) =>

                itens.id !== id


            )


        )


    }


    async function exibirCep() {



        try {



            const response = await axios.get(`https://viacep.com.br/ws/${inputCep}/json/`)



            const { data } = response

            setLocalidade(data.localidade)
            setBairro(data.bairro)
            setLogradouro(data.logradouro)






            if (data.erro) {

                setAnimaAlertCep(true)
                setLocalidade('')
                setLogradouro('')
                setBairro('')
                setMsgAlertCep('CEP nao encontrado, preencha manualmente')
                setStyleMsgCep(true)

                setTimeout(() => {

                    setAnimaAlertCep(false)


                }, 2000)


            }





        } catch (error) {

            if (error) {

                setAnimaAlertCep(true)
                setMsgAlertCep('CEP incompleto (8 digitos) ou em branco ')
                setInputCep('')
                setStyleMsgCep(false)



                setTimeout(() => {

                    setAnimaAlertCep(false)
                    setMsgAlertCep('')

                }, 2000)

            }



        }





    }


    useEffect(() => {

        window.addEventListener('resize', recolherMenu)

        exibirCardapio('burger')

        exibirDepoimento(1)




        return () => {

            window.removeEventListener('resize', recolherMenu)
        }

    }, [])


    useEffect(()=>{

        const myObserver = new IntersectionObserver((elemento)=>{
    
    
            elemento.forEach((el)=>{
    
                if(el.isIntersecting){
    
    
                    if(el.target === boxTxRef.current){
    
    
                       setAnimaAgenda(true)
    
                    }
    
                    if(el.target === boxImgRef.current){
    
                        setAnimaImgAgenda(true)
    
                    }
    
                }else{


                    if(el.target === boxTxRef.current){
    
    
                        setAnimaAgenda(false)
     
                     }
     
                     if(el.target === boxImgRef.current){
     
                         setAnimaImgAgenda(false)
     
                     }



                }
    
    
            })
    
    
    
        })
    
    
    
    
    
    
    
        myObserver.observe(boxImgRef.current)
        myObserver.observe(boxTxRef.current)



         return ()=>{

            if(boxImgRef){

                myObserver.unobserve(boxImgRef.current)
            }

            if(boxTxRef){

                myObserver.unobserve(boxTxRef.current)
            }

         }   

    
        },[])
    


    return (

    
        <context.Provider
            value={value}
        >

            {children}


        </context.Provider>

    )


}