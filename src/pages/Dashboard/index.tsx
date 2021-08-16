import React from "react";
import { Title, Form, Repos, Error } from "./styles";
import logo from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";
import { api } from "../../services/api";

interface GithubRepository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}
export const Dashboard: React.FC = () => {
    const [repos, setRepos] = React.useState<GithubRepository[]>(() => {
        const storageRepos = localStorage.getItem('@GitCollection:repositories');
        if (storageRepos) {
            return JSON.parse(storageRepos);
        }

        return [];
    }); //armazena a lista
    const [newRepo, setNewRepo] = React.useState(""); // armazena o input
    const [inputError, setInputError] = React.useState('');

    React.useEffect(() => {
        localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos));
    }, [repos]); //toda vez que o repos for alterado

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setNewRepo(event.target.value);
    }
    async function handleAddRepo(
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
        event.preventDefault();

        if (!newRepo) {
            setInputError("Informe o username / repositório")
            return;
        }

        const response = await api.get<GithubRepository>(`repos/${newRepo}`);

        const repository = response.data;

        setRepos([...repos, repository]);
        setNewRepo("");
    }
    return (
        <>
            <img src={logo} alt="Git-Collection" />
            <Title>Github Catalog</Title>
            <Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
                <input
                    placeholder="Name / Repository Name"
                    onChange={handleInputChange}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repos>
                {repos.map((repository) => (
                    <a href="/repositories" key={repository.full_name}>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repos>
        </>
    );
};
