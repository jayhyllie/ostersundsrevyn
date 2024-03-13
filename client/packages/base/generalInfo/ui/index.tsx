import { FC } from "react";
import "./style.scss";

export type GeneralInfoType = {
  title: string;
  text: string;
};

export const GeneralInfo: FC<GeneralInfoType> = ({ title, text }) => {
  return (
    <article className="general__card">
      <h2 className="general__card--title">{title}</h2>
      <p className="general__card--text">{text}</p>
    </article>
  );
};
