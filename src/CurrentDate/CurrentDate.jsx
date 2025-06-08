import s from "./CurrentDate.module.css";
import { useEffect, useState } from "react";

const convertDate = (date) => {
  date = date.toLocaleTimeString()
  const localDate = date.substring(0, 5);
  let [hours, minutes] = localDate.split(":").map((e) => +e);

  hours = hours % 12 ? hours % 12 : 12;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes} ${date.slice(-2, date.length)}`;
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
