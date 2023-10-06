import { InputContainer } from "./Styles";

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
};

export default Input;
