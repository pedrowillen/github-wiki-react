import { ButtonContainer } from './styles'

const Button = ({ onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>Search</ButtonContainer>
    );
}

export default Button;