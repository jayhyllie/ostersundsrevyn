import "./style.scss";
import { NavContainer } from "@revyn/navcontainer";
import { Button } from "@revyn/button";
import { Btn, Style } from "@revyn/types";

export const LandingPage = () => {
  const screenWidth = window.innerWidth;
  return (
    <>
      <NavContainer />
      <main id="home" className="home">
        <section className="home__hero">
          <figure className="home__hero--image"></figure>
          <section className="home__hero--title">
            <h1>
              <img src="./logo.png" alt="logo" />
              stersunds{screenWidth < 430 ? <br></br> : null}revyn
            </h1>
            <section className="home__hero--title-actions">
              <Button
                onClick={() => console.log("")}
                type={Btn.SOLID}
                style={Style.DEFAULT}
              >
                Köp biljetter
              </Button>
              <Button
                onClick={() => console.log("")}
                type={Btn.SOLID}
                style={Style.DEFAULT}
              >
                Mer information
              </Button>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};
