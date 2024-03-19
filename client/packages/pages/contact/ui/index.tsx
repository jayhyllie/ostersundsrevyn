import { NavContainer } from "@revyn/navcontainer";
import { useRef } from "react";
import { useSendEmail } from "../data";
import { FormContent } from "./feature/FormContent";
import "./style.scss";

export const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  return (
    <>
      <NavContainer />
      <main className="contact container">
        <section className="contact__info">
          <h1>Kontakta oss</h1>
          <p>
            Har du några frågor eller funderingar? <br />
            Tveka inte att kontakta oss!
          </p>
          <p>Skicka ett mail &#8594;</p>
          <p>Eller ring 070-270 60 05</p>
        </section>
        <form
          ref={form}
          onSubmit={(e) => useSendEmail({ e, form })}
          className="contact__form"
        >
          <FormContent />
        </form>
      </main>
    </>
  );
};
