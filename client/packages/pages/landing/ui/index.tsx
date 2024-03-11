import "./style.scss";
import { NavContainer } from "@revyn/navcontainer";

export const LandingPage = () => {
  const screenWidth = window.innerWidth;
  return (
    <>
      <NavContainer />
      <main id="home" className="home">
        <section className="home__hero">
          <section className="home__hero--title">
            <h1>Östersunds{screenWidth < 430 ? <br></br> : null}revyn</h1>
          </section>
        </section>
      </main>
    </>
  );
};
