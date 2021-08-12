import React from 'react';
import { Title, Form, Repos } from './styles';
import logo from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi';

export const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="Git-Collection" />
            <Title>Github Catalog</Title>
            <Form>
                <input placeholder="Name / Repository Name" />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repos>
                <a href="/repositories">
                    <img src="https://github.com/hellzz13.png" alt="Repositório" />
                    <div>
                        <strong>repositorio/repositório</strong>
                        <p>repositírio do curso</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

            </Repos>
        </>

    );
}

