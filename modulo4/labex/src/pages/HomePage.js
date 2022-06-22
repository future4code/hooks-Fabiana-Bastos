import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #5D4157;
`;

const Subtitle = styled.h2`
    font-size: 1.2em;
  text-align: center;
  color: #5D4157;
`
const ButtonContainer = styled.section`
 direction: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
`

const Button = styled.button`
  background: #C9FFBF;
  color: #5D4157;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5D4157;
  border-radius: 3px;
  text-align: center;
`;

const HomePage = () => {
    const navigate = useNavigate();
    const params = useParams();

    const goToTripsPageBR = () => {
        navigate("/trips/list/BR")
    }

    const goToLoginPageBR = () => {
        navigate("/login/BR")
    }

    const goToTripsPageENG = () => {
        navigate("/trips/list/ENG")
    }

    const goToLoginPageENG = () => {
        navigate("/login/ENG")
    }

    return (
        <>
            <Title>🚀Bem-vinde ao Labex!🚀</Title>
            <Subtitle>Sua agência de viagens espaciais</Subtitle>
            <ButtonContainer>
                <Button onClick={goToTripsPageBR}>Lista de Viagens</Button>
                <Button onClick={goToLoginPageBR}>Área Administrativa</Button>

                <Button onClick={goToTripsPageENG}>Traveling Guide</Button>
                <Button onClick={goToLoginPageENG}>Adm Page</Button>
            </ButtonContainer>
        </>
    )
}

export default HomePage