import { useNavigate } from "react-router-dom";

const ListTripsPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>Viagens espaciais</h1>
            <div>
                <p>Viagem A</p>
                <p>Viagem B</p>
                <br />
                <button onClick={goBack}>Voltar</button>
            </div>
        </>
    )
}

export default ListTripsPage;