import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 88px;
  line-height: 56px;
  max-width: 450px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    height: 72px;
    padding: 24px 28px;
    color: #333;
    border-radius: 5px 0 0 5px;
    border: none;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-size: 18px;
  }
`;
