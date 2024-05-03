import { useCountDown } from "../../data/useCountDown";
import { ShowCounter } from "./ShowCounter";

export type CountDownProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const CountDown = ({ targetDate }: { targetDate: number }) => {
  const { days, hours, minutes, seconds }: CountDownProps =
    useCountDown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return null;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
