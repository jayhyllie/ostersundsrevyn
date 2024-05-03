import { Btn, Style } from "@revyn/types";
import "./style.scss";
import { Button } from "@revyn/button";
import { CountDown } from "./feature/CountDown";

export const ConstructionPage = () => {
  const DAYS_UNTIL_OCTOBER =
    new Date(new Date().getFullYear(), 9, 1).getTime() - new Date().getTime();
  const NOW = new Date().getTime();
  const targetDate = NOW + DAYS_UNTIL_OCTOBER;

  return (
    <main className="construction">
      <figure className="construction__image"></figure>
      <h1 className="construction__headline">Nedräkning till ny hemsida</h1>
      <CountDown targetDate={targetDate} />
      <section className="construction__info">
        <p>Tills dess, kika gärna på våra nummer från föregående år</p>
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
