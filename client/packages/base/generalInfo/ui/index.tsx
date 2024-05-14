import "./style.scss";
import { GeneralInfoProps } from "@revyn/infopage/ui/feature/GeneralInfo";

export const GeneralInfo = ({ info }: { info: GeneralInfoProps }) => {
  return (
    <article className="general__card">
      <h2 className="general__card--title">{info.M.title.S}</h2>
      <p className="general__card--text">{info.M.content.S}</p>
    </article>
  );
};
