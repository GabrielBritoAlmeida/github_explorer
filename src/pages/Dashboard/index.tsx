import React, { useState, useEffect, FormEvent, useMemo } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  item: {
    full_name: string;
  };
}

const Dashboard: React.FC = () => {
  const search = (item: Repository) =>
    item.full_name.toUpperCase() === newRepo.toUpperCase();
  const [newRepo, setNewRepo] = useState("");
  const [inputError, setInputError] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      "@GithubExplorer:repositories"
    );

    if (!storageRepositories) {
      return [];
    }

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  function handleVerify(): void {
    const verify = repositories.find(search);
    if (verify) {
      setInputError("Repositório já existe na lista!");
      return;
    }

    setInputError("");
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => handleVerify(), [newRepo]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newRepo) {
      setInputError("Digite o autor/nome do repositório");
      return;
    }
    //Repository already exists
    if (inputError) return;

    try {
      const { data, status } = await api.get<Repository>(`repos/${newRepo}`);

      if (status === 200) {
        const repository = data;

        setRepositories([...repositories, repository]);

        setNewRepo("");
        setInputError("");
      }
    } catch (error) {
      setInputError("Erro na busca por esse repositório");
    }
  }

  return (
    <>
      <img src={logoImg} alt="Logo github explorer" />
      <S.Title>Explore repositórios no Github.</S.Title>

      <S.Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>

      {inputError && <S.Error>{inputError}</S.Error>}

      <S.Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={`link repository${repository.owner.login}`}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </S.Repositories>
    </>
  );
};

export default Dashboard;
