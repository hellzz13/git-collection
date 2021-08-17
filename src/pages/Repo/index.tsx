import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header } from './styles';
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
        </>
    );
}

