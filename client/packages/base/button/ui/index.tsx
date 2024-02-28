import "./style.scss";
import { ReactNode } from "react";
import { Style, Btn } from "@revyn/types";
import { MouseEvent } from "react";

type ButtonProps = {
  children: ReactNode | ReactNode[];
  style?: Style;
  type?: Btn;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  showPlus?: boolean;
};

export const Button = ({
  isDisabled,
  children,
  type = Btn.SOLID,
  style = Style.DEFAULT,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`button__${type}--${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
