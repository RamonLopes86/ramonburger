export default function formatarMoeda( value , currency){


            return value.toLocaleString('pt-br' , {style:'currency' , currency:currency} )

}