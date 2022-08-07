export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repository}</strong>
            <p>Forms in React</p>

            <a href="https://www.youtube.com/">
                Acessar repositório
            </a>
        </li>
    );
}