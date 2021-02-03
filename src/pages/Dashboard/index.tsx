import React from "react";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo github explorer" />
      <S.Title>Explore repositórios no Github.</S.Title>

      <S.Form>
        <input type="text" placeholder="Digite Aqui" />
        <button type="submit">Pesquisar</button>
      </S.Form>
    </>
  );
};

export default Dashboard;
