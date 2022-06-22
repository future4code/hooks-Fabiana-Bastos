import React from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../config/hooks/useProtectedPage";

const CreateTripPage = () => {
    useProtectedPage();
    return (

        <>
            <h1>Página criar de viagem</h1>
        </>
    )
};

export default CreateTripPage;