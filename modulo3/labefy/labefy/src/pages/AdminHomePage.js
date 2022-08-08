import axios from "axios";
import useProtectedPage from "../config/hooks/useProtectedPage";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { goToTripsDetails, goToCreateTrips, goBack } from "../config/navigate/Coordinator";
import { BASE_URL } from "../constants";
import { Title, Info, InfoContainer, Button, ButtonContainer } from "../config/theme/styles";

const AdminHomePage = () => {
    useProtectedPage();
    const navigate = useNavigate();
    const [listTrips, setListTrips] = useState([]);

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
        .then((res)=> setListTrips(res.data.trips))
        .catch((err)=> console.log(err.message))
    };

    useEffect(() => { getTrips() }, [])

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login");
     };

    const renderTrips = listTrips.map(trips => {
        return <InfoContainer key={trips.id}>
            <Info>{trips.name}</Info>
            <Info>Descrição: {trips.description}</Info>
            <Info>Local: {trips.planet}</Info>
            <Info>Duração: {trips.durationInDays}</Info>
            <Info>Data: {trips.date}</Info>
            <Button onClick={() => goToTripsDetails(navigate, trips.id)}>Detalhes</Button>
        </InfoContainer>
    })

    return (
        <>
            <Title>Página do administrador</Title>
            <ButtonContainer>
                <Button onClick={() => goToTripsDetails(navigate)}>Viagens existentes</Button>
                <Button onClick={() => goToCreateTrips(navigate)}>Criar viagens</Button>
            </ButtonContainer>
            {renderTrips}
            <ButtonContainer>
                <Button onClick={() => goBack(navigate)}>Voltar</Button>
                <Button onClick={() => logout()}>LogOut</Button>
            </ButtonContainer>
        </>
    )
};

export default AdminHomePage;