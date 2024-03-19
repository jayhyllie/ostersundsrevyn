import React from "react";
import emailjs from "@emailjs/browser";

type sendEmail = {
  e: React.FormEvent<HTMLFormElement>;
  form: React.RefObject<HTMLFormElement>;
};

export const useSendEmail = ({ e, form }: sendEmail) => {
  e.preventDefault();

  if (form.current) {
    emailjs
      .sendForm("service_dajcntq", "template_eo4zuxf", form.current, {
        publicKey: "igef5KBl7Ie-yyxuc",
      })
      .then(
        () => {
          console.log("Email sent");
        },
        (error) => {
          console.log("FAILED", error.text);
        }
      );
  }
};
