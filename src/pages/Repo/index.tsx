import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepoInfo } from './styles';
import { FiChevronLeft } from 'react-icons/fi'

import logo from '../../assets/logo.svg'

interface RepositoryParams {
    repository: string;

}

export const Repo: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>()
    return (
        <>
            <Header>
                <img src={logo} alt="GitCollection" />
                <h1>Repo: {params.repository}</h1>
                <Link to='/'>
                    <FiChevronLeft />
                    Voltar
                </Link>

            </Header>
            <RepoInfo>
                <header>
                    <img src="" alt="Teste" />
                    <div>
                        <strong>hellzz13/Churrascometro</strong>
                        <p>Repositorio churrascometro</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>2333</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>2333</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>2333</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepoInfo>
        </>
    );
}

