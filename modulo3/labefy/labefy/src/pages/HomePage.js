import { useNavigate } from "react-router-dom";
import { goToTripsPage } from "../config/navigate/Coordinator"
import { goToLoginPage } from "../config/navigate/Coordinator"
import { Title, Subtitle, ButtonContainer, Button } from "../config/theme/styles"

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Title>🚀Bem-vinde ao LabeX!🚀</Title>
            <Subtitle>Sua agência de viagens mais que espaciais!</Subtitle>
            <ButtonContainer>
                <Button onClick={() => goToTripsPage(navigate)}>Lista de Viagens</Button>
                <Button onClick={() => goToLoginPage(navigate)}>Área Administrativa</Button>
            </ButtonContainer>
        </>
    )
}

export default HomePage