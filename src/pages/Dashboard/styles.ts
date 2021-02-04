import styled from "styled-components";
import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

const ContainerWidth = "700px";

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 88px;
  line-height: 56px;
  max-width: 450px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  align-items: center;

  margin-top: 40px;
  max-width: ${ContainerWidth};

  input {
    flex: 1;
    height: 72px;
    padding: 24px 28px;
    color: #3a3a3a;
    border-radius: 5px 0 0 5px;
    border: none;
    font-size: 20px;
    border: ${({ hasError }) => hasError && "2px solid #c53030"};
    border-right: 0;

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
    font-weight: 700;
    transition: background 0.3s;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: ${ContainerWidth};

  a {
    display: flex;
    align-items: center;

    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;

      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8a8;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;

export const Error = styled.p`
  display: block;
  color: #c53030;
  margin-top: 8px;
  font-size: 18px;
`;
