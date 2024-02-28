import { Btn, Style } from "@revyn/types";
import "./style.scss";
import { Button } from "@revyn/button";

export const ConstructionPage = () => {
  return (
    <main className="construction">
      <h1 className="construction__headline">Vi är snart tillbaka!</h1>
      <section className="construction__info">
        <p>
          Vi jobbar för fullt med att lansera en ny hemsida. Tills dess, kika
          gärna på våra nummer från tidigare år
        </p>
        <a
          href="https://www.youtube.com/@Ostersundsrevyn/videos"
          target="_blank"
        >
          <Button
            onClick={() => console.log("clicked")}
            type={Btn.SOLID}
            style={Style.DEFAULT}
          >
            Ta mig dit &#x2192;
          </Button>
        </a>
      </section>
    </main>
  );
};
