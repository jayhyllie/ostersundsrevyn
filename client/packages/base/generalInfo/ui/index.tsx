import { Info } from "@revyn/types";
import "./style.scss";

export const GeneralInfo = ({ info }: { info: Info }) => {
  return (
    <article className="general__card">
      <h2 className="general__card--title">{info.title}</h2>
      <p className="general__card--text">{info.content}</p>
    </article>
  );
};
