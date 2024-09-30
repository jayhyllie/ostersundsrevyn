import { Team } from "@revyn/types";
import "./style.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

type ModalProps = {
  closeModal: () => void;
  prop: Team | null;
};

export const Modal = ({ closeModal, prop }: ModalProps) => {
  return (
    <>
      <section className={`modal ${prop?.id}`}>
        <h2>{prop?.name}</h2>
        <p>{prop?.bio}</p>
        <CloseOutlinedIcon onClick={closeModal} id="close" />
      </section>
    </>
  );
};
