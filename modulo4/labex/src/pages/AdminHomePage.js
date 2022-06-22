import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useProtectedPage from "../config/hooks/useProtectedPage";

const AdminHomePage = () => {
    useProtectedPage();

    const navigate = useNavigate();    

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            navigate("/login/BR");
        }
    }, [navigate]);

    const goToTripsDetails = () => {
        navigate("/admin/trips/:id")
    }

    const goToCreateTrips = () => {
        navigate("/admin/trips/create")
    } 

    return (
        <>
            <h1>Página adm</h1>
            <button onClick={goToTripsDetails}>Viagens existentes</button>
            <button onClick={goToCreateTrips}>Criar viagens</button>
        </>
    )
};

export default AdminHomePage;