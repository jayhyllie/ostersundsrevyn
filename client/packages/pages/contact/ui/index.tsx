/* eslint-disable react-hooks/rules-of-hooks */
import "./style.scss";

export const ContactPage = () => {
  const mapurl = import.meta.env.VITE_MAP_URL;
  return (
    <>
      <main className="contact container">
        <section className="contact__info">
          <h1>Kontakta oss</h1>
          <p>
            Har du några frågor eller funderingar? <br />
            Tveka inte att kontakta oss!
          </p>
          <a href="mailto:info@ostersundsrevyn.com">Skicka ett mail &#8594;</a>
          <p>Eller ring 070-270 60 05</p>
        </section>
        <section className="contact__map">
          <a href={mapurl} target="_blank" rel="noopener noreferrer">
            <img src="./map.png" alt="map" className="contact__map--image" />
          </a>
        </section>
      </main>
    </>
  );
};
