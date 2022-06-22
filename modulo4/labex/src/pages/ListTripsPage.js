import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ListTripsPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const language = params.language;

    const goBack = () => {
        navigate(-1);
    }

    

    return (
        <>
            <h1>{language === 'BR' ? "Viagens espaciais" : "Traveling Guide"}</h1>
            <div>
                <p>{language === 'BR' ? "Viagem A" : "Trip A"}</p>
                <p>{language === 'BR' ? "Viagem B" : "Trip B"} </p>
                <br />
                <button onClick={goBack}>{language === 'BR' ? "Voltar" : "Back"}</button>
            </div>
        </>
    )
}

export default ListTripsPage;