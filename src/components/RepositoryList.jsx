import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository="unform2"/>
                <RepositoryItem repository="unform2"/>
                <RepositoryItem repository="unform2"/>
                <RepositoryItem repository="unform2"/>
            </ul>
        </section>
    );
}