import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepoInfo, Issues } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { api } from '../../services/api'

import logo from '../../assets/logo.svg'

interface RepositoryParams {
    repository: string;

}

export const Repo: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>()

    React.useEffect(() => {
        api
            .get(`repos/${params.repository}`)
            .then(response => console.log(response.data))
        api
            .get(`repos/${params.repository}/issues`)
            .then(response => console.log(response.data))

    }, [params.repository]);


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
                    <img src="http://github.com/hellzz13.png" alt="Teste" />
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
                        <strong>23</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>3</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepoInfo>
            <Issues>
                <Link to='/'>
                    <div>
                        <strong>REPOSITORIO AQUI</strong>
                        <p>descrição aqui</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
}

