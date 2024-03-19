import React from "react";
import emailjs from "@emailjs/browser";

type sendEmail = {
  e: React.FormEvent<HTMLFormElement>;
  form: React.RefObject<HTMLFormElement>;
};
const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export const useSendEmail = ({ e, form }: sendEmail) => {
  e.preventDefault();

  if (form.current) {
    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
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
