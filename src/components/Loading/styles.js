import styled from "styled-components";

export const ContainerLoading = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);

  img {
    width: 70%;
    height: 70%;
  }

  span {
    font-size: 36px;
    color: #fff;
  }
`;
