import s from "./CurrentDate.module.css";
import { useEffect, useState } from "react";

const convertDate = (date) => {
  date = date.toLocaleTimeString().substring(0, 5);
  let [hours, minutes] = date.split(":").map((e) => +e);
  let time = hours >= 12 ? "p. m." : "a. m.";

  hours = hours % 12 ? hours % 12 : 12;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes} ${time}`;
};

export default function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s["date-container"]}>
      <p>{convertDate(date)}</p>
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
}
