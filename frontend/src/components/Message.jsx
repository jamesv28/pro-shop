import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const Message = ({ variant = "info", children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
};

export default Message;
