import { Button } from "@revyn/button";
import { Btn, Style } from "@revyn/types";

export const FormContent = () => {
  return (
    <>
      <input name="user_name" id="namn" type="text" placeholder="Namn..." />
      <input name="user_email" id="email" type="email" placeholder="Email..." />
      <input
        name="user_phone"
        id="telefon"
        type="text"
        placeholder="Telefon..."
      />
      <textarea
        name="message"
        id="meddelande"
        rows={5}
        typeof="text"
        placeholder="Skriv ditt meddelande här..."
      />
      <Button
        type={Btn.SOLID}
        style={Style.SECONDARY}
        onClick={() => console.log("Email submitted")}
      >
        Skicka
      </Button>
    </>
  );
};
