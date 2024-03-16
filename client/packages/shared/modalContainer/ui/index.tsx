import React from "react";
import "./style.scss";

export const ModalContainer = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <section className="modalContainer">{children}</section>;
};
