import Title from "../../components/Title";

const texts = {
  title: "Ubicación",
};

const PlaceSection = () => {
  const screenWidth = window.screen.width;
  return (
    <div id="where" className="flex justify-center items-center">
      <div>
        <Title>{texts.title}</Title>
        <div className="sm:hidden md:block">
          {screenWidth > 600 ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.2038428241717!2d-3.81587458435279!3d40.3378238683582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418eb6a7cba32b%3A0x45b37ba0ef1540e7!2sPirata&#39;s!5e0!3m2!1ses!2ses!4v1619471564543!5m2!1ses!2ses"
              width="600"
              height="375"
              title="place"
              loading="lazy"
            ></iframe>
          ) : (
            <a href="https://maps.google.com/maps?ll=40.33782,-3.813686&z=16&t=m&hl=es&gl=ES&mapclient=embed&cid=5022493940584366311">
              Abrir en Google Maps
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceSection;
