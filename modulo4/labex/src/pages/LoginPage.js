import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>Viagens espaciais</h1>
            <div>
                <input placeholder="E-mail"/>
                <br/>
                <input placeholder="Senha"/>
                <br />
                <button>Adicionar</button>
                <br />
                <br />
                <button onClick={goBack}>Voltar</button>
            </div>
        </>
    )
};

export default LoginPage;