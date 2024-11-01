import TicketNum from "./ticketNum";
export default function ticket({ sumTickets, ticket, lottery }) {
  return (
    <>
      <div className="ticket text display">
        {ticket.map((num, index) => (
          <TicketNum num={num} />
        ))}
      </div>
      <br />
      <span>
        <h2 className="congratulations">
          {lottery && "congratulations you won!"}
        </h2>
      </span>
      <span className="ticket text display">
        <span className="ticketItem">total= {sumTickets}</span>
      </span>
      <br />
      <br />
    </>
  );
}
