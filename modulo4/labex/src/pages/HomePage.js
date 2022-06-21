import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const goToTripsPage = () => {
        navigate("/trips/list")
    }

    const goToLoginPage = () => {
        navigate("/login")
    }

    return (
        <>
            <h1>🚀Bem-vinde ao Labex!🚀</h1>
            <h2>Sua agência de viagens espaciais</h2>
            <div>
                <button onClick={goToTripsPage}>Lista de Viagens</button>
                <button onClick={goToLoginPage}>Área Administrativa</button>
            </div>
        </>
    )
}

export default HomePage;