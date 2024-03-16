import React, { FC, MouseEvent } from "react";
import { Style, Card } from "@revyn/types";
import "./style.scss";

type CardItemProps = {
  children: React.ReactNode | React.ReactNode[];
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  style?: Style;
  type?: Card;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const CardItem: FC<CardItemProps> = ({
  children,
  onClick,
  style,
  type,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <article
      className={`card__${type}` + (style ? `--${style}` : "")}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </article>
  );
};
