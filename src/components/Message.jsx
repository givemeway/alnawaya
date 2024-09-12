import "./Message.css";
import { CloseIcon } from "./icons/CloseIcon";
import { SuccessIcon } from "./icons/SuccessIcon";

export const Message = ({ msg, heading, onClick }) => {
  return (
    <div className="msg-container">
      <div className="submit-success-container">
        <h2 className="submit-success-heading">{heading}</h2>
        <SuccessIcon style={{ height: "100%", width: 25 }} />
      </div>
      <p className="submit-message">{msg}</p>
      <CloseIcon
        className={"close-icon"}
        style={{ height: 25, width: 25 }}
        onClick={onClick}
      />
    </div>
  );
};
