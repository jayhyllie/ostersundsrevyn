import { Info } from "@revyn/types";
import "./style.scss";
import DOMPurify from "dompurify";

export const GeneralInfo = ({ info }: { info: Info }) => {
  const sanitizedContent = DOMPurify.sanitize(info.content as string);
  return (
    <article className="general__card">
      <h2 className="general__card--title">{info.title.toUpperCase()}</h2>
      <p dangerouslySetInnerHTML={{ __html: sanitizedContent }}></p>
    </article>
  );
};
