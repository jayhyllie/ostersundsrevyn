import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { tickets } from "../../data";
import { Ticket } from "@revyn/types";

const AnimatedTicket = (ticket: Ticket) => {
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
      <h3 className="info__tickets--card-type">{ticket.type}</h3>
      <p className="info__tickets--card-limit">{ticket.limit}</p>
      <p className="info__tickets--card-price">{ticket.price} kr</p>
      <p className="info__tickets--card-service">{ticket.service}</p>
    </motion.article>
  );
};

export const TicketPrice = () => {
  return (
    <section className="info__tickets">
      {tickets.map((ticket, index) => (
        <AnimatedTicket key={index} {...ticket} />
      ))}
    </section>
  );
};
