import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../config/navigate/Coordinator";
import { Title, Answer, Button, Input } from "../config/theme/styles";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onSubmitPassword = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/hooks-fabiana-bastos/login";

    const body = {
        email: email,
        password: password
    }
    
    axios
    .post(URL, body)
    .then((res) => {
        localStorage.setItem("tokenLabeX", res.data.token);
        navigate("/admin/trips/list")
    })
    .catch((err) => {console.log(err.response.data)
    });
}
    

    return (
        <>
            <Title>Login</Title>
            <Input>
                <Answer placeholder="email"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                />
                <br/>
                <Answer 
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                />
                <br />
                <Button onClick={onSubmitPassword}>Adicionar</Button>
                <br />
                <Button onClick={() => goBack(navigate)}>Voltar</Button>
            </Input>
        </>
    )
};

export default LoginPage;