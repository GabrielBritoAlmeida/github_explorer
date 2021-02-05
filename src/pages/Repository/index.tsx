import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  console.log("🚀 ~ file:", params);

  return (
    <>
      <S.Header>
        <img src={logoImg} alt="Logo Github Explorer" />
        <Link to="/dashboard">
          <FiArrowLeft size={16} />
          Voltar
        </Link>
      </S.Header>
    </>
  );
};

export default Repository;
