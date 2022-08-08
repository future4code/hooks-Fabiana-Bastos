import axios from "axios";
import useProtectedPage from "../config/hooks/useProtectedPage";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../constants/index";
import { goToCreateTrips, goBack } from "../config/navigate/Coordinator";
import { Title, Info, InfoContainer, Button, ButtonContainer } from "../config/theme/styles";

const TripDetailsPage = () => {
    useProtectedPage("/login");
    const navigate = useNavigate();
    const {id} = useParams()

    const [trip, setTrip] = useState({});

    const headers = {
        headers: {
            auth: localStorage.getItem('tokenLabeX')
        }
    };

    const getDetails = () => {
        axios.get(`${BASE_URL}/trip/${id}`, headers)
        .then((res)=> setTrip(res.data.trip))
        .catch((err)=> console.log(err.message))
    };

    const deleteTrip = (id) => {
        axios.delete(`${BASE_URL}/trips/${id}`, headers)
        .then((res)=> alert("Viagem deletada com sucesso!"))
        .catch((err)=> alert("Houve um erro, tente novamente!"))
    };

    useEffect(() => { getDetails() }, []);

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login");
     };


    return (
        <>
            <Title>Página de detalhes de viagem</Title>
            <InfoContainer key={trip.id}>
                <Info>{trip.planet}</Info>
                <Info>{trip.durationInDays}</Info>
                <Info>{trip.date}</Info>
                <Info>{trip.name}</Info>
                <Info>{trip.description}</Info>
                <br/>
                {trip.candidates?.map(candidate => {
                    return <InfoContainer key={candidate.id}>
                        <Info>{candidate.name}</Info>
                        <Info>{candidate.age}</Info>
                        <Info>{candidate.profession}</Info>
                        <Info>{candidate.country}</Info>
                        <Info>{candidate.applicationText}</Info>
                        <br/>
                    </InfoContainer>
                })}
                <Button onClick={() => deleteTrip(trip.id)}>Deletar</Button>
            </InfoContainer>
            <ButtonContainer>
                <Button onClick={() => goToCreateTrips(navigate)}>Criar uma viagem</Button>
                <Button onClick={() => goBack(navigate)}>Voltar</Button>
                <Button onClick={() => logout()}>LogOut</Button>
            </ButtonContainer>
        </>
    )
};

export default TripDetailsPage;