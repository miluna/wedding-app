import Button from "../../components/Button";
import Title from "../../components/Title";
import "./hero.css";

const texts = {
  text1: "Estas invitado ",
  text2: "a la boda de Miky y Lore",
  text3: (
    <p>
      ¡Hola! <br /> <br />
      Estás invitado a la boda de Miky y Lorena, tienes de fecha para
      confirmarnos tu asistencia hasta el 30 de Mayo. La boda será el 17 de
      Julio a las 15:00, no se hará ceremonia será directamente ir a la comida
      (nos saltamos lo aburrido) <br /> <br />
      ¡Bienvenidos!
    </p>
  ),
  button1: "Apuntarme",
  button2: "Dónde",
};

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="sm:text-center lg:text-left">
        <Title>
          <div className="block xl:inline">{texts.text1}</div>
          <div className="block">
            <span className="text-pink-400 xl:inline">{texts.text2}</span>
          </div>
        </Title>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {texts.text3}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <Button
            text={texts.button1}
            primary
            isLink
            link="#register"
            size="medium"
          />
          <Button text={texts.button2} isLink link="#where" size="full" />
        </div>
      </div>
      <div className="main-photo" />
    </div>
  );
};

export default HeroSection;
