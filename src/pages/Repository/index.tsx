import { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";
import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import Loading from "../../components/Loading";

import * as S from "./styles";
interface RepositoryParams {
  repository: string;
}

interface RepositoryProps {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [repository, setRepository] = useState<RepositoryProps | null>(null);
  const [issuesRepo, setIssuesRepo] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    setLoading(true);
    async function loadData(): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`),
      ]);

      if (repository) setRepository(repository.data);

      if (issues) setIssuesRepo(issues.data);

      setLoading(false);
    }

    loadData();
  }, [params.repository]);

  if (loading) return <Loading />;

  return (
    <>
      <S.Header>
        <img src={logoImg} alt="Logo Github Explorer" />
        <Link to="/">
          <FiArrowLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      {repository && (
        <S.RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </S.RepositoryInfo>
      )}

      <S.Issues>
        {issuesRepo.map((issue) => (
          <a key={issue.id} href={issue.html_url} target="blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </S.Issues>
    </>
  );
};

export default Repository;
