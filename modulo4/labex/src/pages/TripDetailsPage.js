import { useEffect } from "react";
import axios from "axios";
import useProtectedPage from "../config/hooks/useProtectedPage";

const TripDetailsPage = () => {
    useProtectedPage();

    useEffect(() => {
        const URL ="https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/NoIFVcOiSgTKTIPVZwXS";
        const headers ={
            headers: {auth: localStorage.getItem("token")}
                
        };
        axios.get(URL, headers)
        .then ((res) => console.log(res.data.trip))
        .catch((err) => console.log (err.response.message))

    }, [])

    return (
        <>
            <h1>Página de detalhes de viagem</h1>
        </>
    )
};

export default TripDetailsPage;