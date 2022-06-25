import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { goBack, goToForm } from "../config/navigate/Coordinator";
import { BASE_URL } from "../constants/index";
import { Title, Info, InfoContainer, Button, ButtonContainer } from "../config/theme/styles";

const ListTripsPage = () => {
    const navigate = useNavigate();
    const [listTrips, setListTrips] = useState([]);


    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
        .then((res)=> setListTrips(res.data.trips))
        .catch((err)=> console.log(err.message))
    };

    useEffect(() => { getTrips() }, [])

    const renderTrips = listTrips.map(trips => {
        return <InfoContainer key={trips.id}>
            <Info>{trips.name}</Info>
            <Info>Descrição: {trips.description}</Info>
            <Info>Local: {trips.planet}</Info>
            <Info>Duração: {trips.durationInDays}</Info>
            <Info>Data: {trips.date}</Info>
            <Button onClick={() => goToForm(navigate)}>Viajar!</Button>
        </InfoContainer>
    })

    return (
        <>
            <Title>Viagens espaciais</Title>
            {renderTrips}
            <ButtonContainer>
                <Button onClick={() => goBack(navigate)}>Voltar</Button>
            </ButtonContainer>
        </>
    )
}

export default ListTripsPage;