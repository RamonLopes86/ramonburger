import Image from "next/image"
import img1 from '../../public/imgdep1.jpg'
import img2 from '../../public/imgdep2.jpg'
import img3 from '../../public/imgdep3.jpg'



const arrayDep = [


    {

        id: 1,
        img: img1,
        nome: 'Carina Hosana',
        nota: 4.5,
        stars:[

            'Star',
            'Star',
            'Star',
            'Star',
            'Storke'


        ],
        dep: 'Muito bom, recomendo demais! Comida muito bem feita pelo chefe, atendimento dentro dos parâmetros e boa comunicação com o cliente.'


    },

    {

        id: 2,
        img: img2,
        nome: 'Maria Helena',
        nota: 5,
        stars:[

            'Star',
            'Star',
            'Star',
            'Star',
            'Star'


        ],

        dep: 'Um jantar perfeito do começo ao fim. Comida, experiência, serviço... foi tão maravilhoso que fomos dois dias seguidos - fato inédito para mim em uma viagem'


    },

    {

        id: 3,
        img: img3,
        nome: 'Ana Júlia',
        stars:[

            'Star',
            'Star',
            'Star',
            'Star',
            'Storke',



        ],
        nota: 4.5,
        dep: 'A comida estava excelente e o serviço gentil nos surpreendeu! Dica: reserve umas 3 horas para ter uma experiência incrível.'


    },




]



export default arrayDep