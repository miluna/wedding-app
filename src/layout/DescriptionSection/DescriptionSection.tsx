import Title from "../../components/Title";
import MenuImage from "../../images/menu.jpeg";

const texts = {
  title1: <p>Boda COVID FREE</p>,
  text1: (
    <p className="mt-3 text-base text-gray-500">
      La boda será el día 17 de julio en el restaurante Pirata's de Alcorcón y
      como todas las bodas que hay ahora será: <br /> <br />
      · Las mesas estarán dividas dependiendo de las medidas sanitarias vigentes
      el mes de julio.
      <br />
      · No se podrá bailar ni levantarse constantemente, ni juntarse entre mesas
      ( nos tocará gritar un poco)
      <br />
      · Como hace 500 años, se fuma en el exterior.
      <br />
      · Sobre todo lo que más tendremos es comida y bebida. <br /> <br />
      <span className="font-bold">
        No, no invitamos a la comida, lo siento, somos ratas de naturaleza.
      </span>
      <br />
      <br />
      ¿Cómo lo vamos a hacer entonces?
      <br />
      Ahora os pondremos el menú, el precio, y un formulario para que os
      apuntéis. <br />
      <span className="font-bold">
        Para confirmar vuestra asistencia, tendréis que registraros y hacer un
        bizum o transferencia a Lorena o Miky
      </span>
      <br /> <br />
      Hemos buscado algo chulo, rico y para todos los bolsillos, si no podéis ir
      no pasa nada 😀 otro día nos tomamos una cocacolita juntos.
    </p>
  ),
  title2: <p>Vestimenta</p>,
  text2: (
    <p className="mt-3 text-base text-gray-500">
      <span className="font-bold">
        ¡¡Olvidaos de la vestimenta típica de boda!!
      </span>
      <br /> <br />
      Vamos a ir{" "}
      <span className="font-bold">
        vestidos normal y a quien le apetezca que vaya con algun adorno de
        pirata
      </span>
      (a juego con la decoración del local)
    </p>
  ),
};

const DescriptionSection = () => {
  return (
    <div className="mt-10 flex justify-center items-left flex-col p-2">
      <div>
        <Title>{texts.title1}</Title>
        <p className="mt-8">{texts.text1}</p>
      </div>
      <div>
        <Title>{texts.title2}</Title>
        <p className="mt-8">{texts.text2}</p>
      </div>
      <img
        className="mt-16"
        src={MenuImage}
        alt="menu"
        onClick={() => window.open(MenuImage)}
      />
    </div>
  );
};

export default DescriptionSection;
