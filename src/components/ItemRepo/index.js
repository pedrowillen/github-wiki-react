import { ItemContainer } from './styles';

const ItemRepo = ({ repo, onRemove }) => {
    const handleRemoveRepo = () => {
        onRemove(repo.id);
    }

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a className="see-repo" href={repo.html_url} target="_blank" >See repository</a><br />
            <a onClick={handleRemoveRepo} className="remove" href="#">Remove</a>
            <hr />
        </ItemContainer>
    );
}

export default ItemRepo;

