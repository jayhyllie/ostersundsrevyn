import { CountDownProps } from "./CountDown";
import { DateTimeDisplay } from "./DateTimeDisplay";

export const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: CountDownProps) => {
  return (
    <section className="show-counter">
      <DateTimeDisplay value={days} type={"Dagar"} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} type={"Tim"} isDanger={false} />
      <DateTimeDisplay value={minutes} type={"Min"} isDanger={false} />
      <DateTimeDisplay value={seconds} type={"Sek"} isDanger={false} />
    </section>
  );
};
