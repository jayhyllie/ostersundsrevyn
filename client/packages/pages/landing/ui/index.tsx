import "./style.scss";
/* import { TicketPrice } from "@revyn/infopage/ui/feature/TicketPrice"; */

export const LandingPage = () => {
  /* const ticket: Info = {
    id: "1",
    title: "Early bird",
    subtitle: "Gäller endast fram till 15 Oktober",
    content: "Eventuell serviceavgift tillkommer",
    price: 320,
  }; */
  return (
    <>
      <main id="home" className="home">
        <section className="home__tickets">
          {/* <TicketPrice tickets={[ticket]} /> */}
        </section>
        <figure className="home__image"></figure>
      </main>
    </>
  );
};
