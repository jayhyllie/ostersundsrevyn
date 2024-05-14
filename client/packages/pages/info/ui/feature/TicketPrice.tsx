import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TicketProps {
  M: {
    id: { S: string };
    content: { S: string };
    price: { N: number };
    title: { S: string };
    subtitle?: { S: string };
  };
}

const AnimatedTicket = ({ ticket }: { ticket: TicketProps }) => {
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
      <h3 className="info__tickets--card-type">{ticket.M.title.S}</h3>
      <p className="info__tickets--card-limit">{ticket.M.subtitle?.S}</p>
      <p className="info__tickets--card-price">{ticket.M.price.N} kr</p>
      <p className="info__tickets--card-service">{ticket.M.content.S}</p>
    </motion.article>
  );
};

export const TicketPrice = ({ tickets }: { tickets: TicketProps[] | null }) => {
  return (
    <section className="info__tickets">
      {tickets?.map((ticket) => (
        <AnimatedTicket ticket={ticket} key={ticket.M.id.S} />
      ))}
    </section>
  );
};
