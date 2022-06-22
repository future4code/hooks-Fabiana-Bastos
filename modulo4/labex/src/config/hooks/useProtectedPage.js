import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            navigate("/login/BR");
        }
    }, [navigate]);
}

export default useProtectedPage;