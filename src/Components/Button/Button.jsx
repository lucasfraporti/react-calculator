import { ButtonContainer } from "./Styles";

const Button = ({ label, onClick }) => {
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>;
};

export default Button;
