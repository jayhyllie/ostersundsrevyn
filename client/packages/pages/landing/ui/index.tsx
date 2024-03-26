import "./style.scss";

export const LandingPage = () => {
  const screenWidth = window.innerWidth;
  return (
    <>
      <main id="home" className="home">
        <video
          src="./Revytrailer2024.mp4"
          width="100%"
          height="100%"
          muted
          autoPlay
          loop
        ></video>
        <section className="home__hero">
          <section className="home__hero--title">
            <h1>Östersunds{screenWidth < 430 ? <br></br> : null}revyn</h1>
          </section>
        </section>
      </main>
    </>
  );
};
