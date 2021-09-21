import React from "react";
import Faq from "../../components/faq/Faq";
import FaqPregFrecuentes from "../../components/faq/FaqPregFrecuentes";
function FaqPage() {
  return (
    <div className="container m-auto w-75">
      <div className="container m-3">
        <h1 className='m-5'>Conocenos un poco mas !</h1>
        <Faq
          title1='Quienes somos en Reparapp?'
          text1='Somos un grupo de personas que buscamos la inclusion al mercado tecnologico
          de todas las personas por igual'
          title2='Cual es nuestra mision?'
          text2='Buscamos democratizar el acceso al mercado tecnologico de todos los profesionales
          dentro del sector de mantencion y armado hogareño. A su vez buscamos permitir
          acceder a los mejores profesionales dentro de la zona de cada persona, validados
          por sus mismos vecinos.'
          title3='Por que somos diferentes al resto?'
          text3='En nuestra aplicacion podra encontrar ofertas de trabajo y trabajadores disponibles
          dentro de su zona, validados por sus mismos vecinos, garantizando asi
          un servicio de excelencia y confianza'
          title4='Como empezo?'
          text4='Todos en algun momento tuvimos algun problema dentro del hogar el cual no 
          supimos resolver y el tener que ir a buscar ese profesional siempre fue
          un trabajo muy tedioso e inseguro. Ademas poder acercarse a la gente que necesita
          de mi profesion tambien siempre fue muy dificil. Por ende, hacia falta un buen 
          nexo, ahi surge Reparapp'
        />
      </div>
      <div className="container m-3">
        <h1 className='m-5'>Preguntas Frecuentes !</h1>
        <FaqPregFrecuentes
          title1='Como ofrecer mis servicios?'
          text1='Para eso tendras que registrarte como un usuario tecnico, elegir tu oficio/s
          y completar tu informacion, ademas de eso contaras con una opcion de ser un 
          usuario premium que te permitira tener tu perfil recomendado.'
          title2='Como solicitar un servicio? '
          text2='BPara eso tendras que registrarte como un usuario final, completar tus datos y
          luego generar un pedido de trabajo, en el cual tendras que introducir
          toda la informacion sobre el servicio requerido.'
          title3='Como calificar?'
          text3='Primero deberas solicitar tanto un servicio o un prestador de servicios, luego de que este acepte 
          se comunicaran para llevar a cabo el mismo y una vez terminado ambos podran puntuar y dejar una recomendacion, 
          finalizando asi el proceso'
          title4='Como reportar?'
          text4='Ya que nuestra mision es poder permitir este nexo de la manera mas segura y con confianza, existe la 
          posibilidad de reportar cuentas o pedidos de trabajo que atenten contra la seguridad de las personas o
          que perturben con la cordialidad debida.
          
          Metodos de pago para la promocion de prestadores de servicio (Usuarios premium)
          
          Contara con la posibilidad de abonar via mercado pago dentro de su perfil un usuario premium,
          el cual le permitira ser un usuario recomendado, lo que asegurara la visualizacion prioritaria de
          su perfil.'
        />
      </div>
    </div>
  );
}

export default FaqPage;
