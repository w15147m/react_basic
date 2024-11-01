import "./Lottery.css";
import { useState } from "react";
import Ticket from "./Ticket"; 
import { genTickets, sumOfArray } from "../helper";
export default function Lottery({ num = 3, winningNum = 15 }) {
  let [ticket, setTicket] = useState(genTickets(num));
  let sumTickets = sumOfArray(ticket);
  let lottery = sumTickets === winningNum;
  let genNew = () => {
    setTicket(() => genTickets(num));
  };

  return (
    <>
      <Ticket sumTickets={sumTickets} ticket={ticket} lottery={lottery} />
      <button onClick={genNew}>Gen New Ticket</button>
    </>
  );
}
