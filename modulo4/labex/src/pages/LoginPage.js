import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  background: #C9FFBF;
  color: #5D4157;

  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid #5D4157;
  border-radius: 3px;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "#635b5b"};
  background: #E6DADA;
  border: none;
  border-radius: 3px;
`;

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
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login";

        const body = {
            email: email,
            password: password
        }

        axios
        .post(URL, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            navigate("/admin/trips/list")
        })
        .catch((err) => {console.log(err.response.data)
        });
    }


    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>Login</h1>
            <div>
                <Input placeholder="email"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                />
                <br/>
                <Input  
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                />
                <br />
                <Button onClick={onSubmitPassword}>Adicionar</Button>
                <br />
                <Button onClick={goBack}>Voltar</Button>
            </div>
        </>
    )
};

export default LoginPage;