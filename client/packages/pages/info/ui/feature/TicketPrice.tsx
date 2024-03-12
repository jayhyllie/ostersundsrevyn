export const TicketPrice = () => {
  const tickets = [
    {
      type: "Revy",
      limit: "",
      price: 420,
      service: "Eventuell serviceavgift tillkommer",
    },
    {
      type: "Revy + Supé",
      limit: "",
      price: 835,
      service: "Eventuell serviceavgift tillkommer",
    },
    {
      type: "Revy",
      limit: "Endast 14/1, 17/1, 26/1, 28/1, 4/2",
      price: 340,
      service: "Eventuell serviceavgift tillkommer",
    },
  ];
  return (
    <section className="info__tickets">
      {tickets.map((ticket, index) => (
        <article className="info__tickets--card" key={index}>
          <h3 className="info__tickets--card-type">{ticket.type}</h3>
          <p className="info__tickets--card-limit">{ticket.limit}</p>
          <p className="info__tickets--card-price">{ticket.price} kr</p>
          <p className="info__tickets--card-service">{ticket.service}</p>
        </article>
      ))}
    </section>
  );
};
