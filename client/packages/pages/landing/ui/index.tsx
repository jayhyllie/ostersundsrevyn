import { Info } from "@revyn/types";
import "./style.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedTicket = ({ ticket }: { ticket: Info }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      className="info__tickets--card"
      ref={ref}
      style={{ scale, opacity }}
    >
      <h3 className="info__tickets--card-type">{ticket.title}</h3>
      <p className="info__tickets--card-limit">{ticket.subtitle}</p>
      <p className="info__tickets--card-price">{ticket.price} kr</p>
      <p className="info__tickets--card-service">{ticket.content}</p>
    </motion.article>
  );
};

const TicketPrice = ({ tickets }: { tickets: Info[] | null }) => {
  return (
    <section className="info__tickets">
      {tickets?.map((ticket) => (
        <AnimatedTicket ticket={ticket} key={ticket.id} />
      ))}
    </section>
  );
};

export const LandingPage = () => {
  const ticket: Info = {
    id: "1",
    title: "Early bird",
    subtitle: "Gäller endast fram till 15 Oktober",
    content: "Eventuell serviceavgift tillkommer",
    price: 320,
  };
  return (
    <>
      <main id="home" className="home">
        <section className="home__tickets">
          <TicketPrice tickets={[ticket]} />
        </section>
        <figure className="home__image"></figure>
      </main>
    </>
  );
};
