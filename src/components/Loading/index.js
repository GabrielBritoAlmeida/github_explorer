import React from "react";

import logoImg from "../../assets/gitbgLoad.svg";

import * as S from "./styles";

function Loading() {
  return (
    <>
      <S.ContainerLoading>
        <span>Carregando...</span>
        <img src={logoImg} alt="Exibindo logo de carregando" />
      </S.ContainerLoading>
    </>
  );
}

export default Loading;
