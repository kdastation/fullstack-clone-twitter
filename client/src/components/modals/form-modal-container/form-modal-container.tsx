import { FC } from "react";
import "./form-modal-container.scss";

interface FormModalContainerProps {
  Component: React.ElementType;
}

const FormModalContainer: FC<FormModalContainerProps> = (props) => {
  const { Component } = props;
  return (
    <>
      <div className="form_modal_container">
        <Component />
      </div>
    </>
  );
};

export { FormModalContainer };
