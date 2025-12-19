import styled from "styled-components";

export default function TextInput({ value, onChange, Icon, ...restProps }) {
  return (
    <InputStyled>
      {Icon}
      <input type="text" value={value} onChange={onChange} {...restProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0px;

  .icon {
    font-size: 16px;
    margin-right: 8px;
    color: #93a2b1;
  }

  input {
    border: none;
    width: 100%;
    font-style: 15px;
    color: #17161a;
  }

  &::placeholder {
    background: white;
    color: lightgray;
  }
`;
