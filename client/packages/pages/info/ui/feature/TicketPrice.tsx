import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { tickets } from "../../data";

export const TicketPrice = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section className="info__tickets">
      {tickets.map((ticket, index) => (
        <motion.article
          className="info__tickets--card"
          key={index}
          ref={ref}
          style={{ scale: scale, opacity: opacity }}
        >
          <h3 className="info__tickets--card-type">{ticket.type}</h3>
          <p className="info__tickets--card-limit">{ticket.limit}</p>
          <p className="info__tickets--card-price">{ticket.price} kr</p>
          <p className="info__tickets--card-service">{ticket.service}</p>
        </motion.article>
      ))}
    </section>
  );
};
