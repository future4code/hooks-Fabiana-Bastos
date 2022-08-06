import axios from "axios";
import useProtectedPage from "../config/hooks/useProtectedPage";
import useForms from "../config/hooks/useForms";
import { useNavigate } from "react-router-dom";
import { goBack } from "../config/navigate/Coordinator";
import { BASE_URL } from "../constants";
import { Title, Answer, Button, FormContainer, ButtonContainer } from "../config/theme/styles";


const CreateTripPage = () => {
    useProtectedPage("/login");
    const navigate = useNavigate();

    const { form, onChange, cleanFields } = useForms({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
     })

    const tripCreation = (event) => {
        event.preventDefault();
        const headers = {
            headers: {
                auth: localStorage.getItem('tokenLabeX'),
            },
        };
        
        axios
            .post(`${BASE_URL}/trips`, form, headers)
            .then((res) => {
                alert("Viagem criado com sucesso!");
                cleanFields()
            })
            .catch((err) => {
                alert("Houve um problema, tente novamente!")
            })
    }

   return (
        <>
            <Title>Página criar de viagem</Title>
            <FormContainer onSubmit={tripCreation}>
                <br/>
                <Answer 
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder={"Nome"}
                required
                pattern={"^.{5,}"}
                title={"O nome deve ter no mínimo 5 letras"}
                />
                <br/>

                <Answer 
                name="planet"
                value={form.planet}
                onChange={onChange}
                placeholder={"Lugar"}
                required
                />
                <br/>

                <Answer 
                name="date"
                value={form.date}
                onChange={onChange}
                placeholder={"Data"}
                required
                type="date"
                />
                <br/>


                <Answer 
                name="description"
                value={form.description}
                onChange={onChange}
                placeholder={"Descrição"}
                required
                pattern={"^.{30,}"}
                title={"O nome deve ter no mínimo 30 caracteres"}
                />
                <br/>

                <Answer 
                name="durationInDays"
                value={form.durationInDays}
                onChange={onChange}
                placeholder={"Duração"}
                required
                min={50}
                type="number"
                />

                <Button>Criar viagem</Button>
            </FormContainer>

            <ButtonContainer>
                <Button onClick={() => goBack(navigate)}>Voltar</Button>
            </ButtonContainer>
        </>
    )
};

export default CreateTripPage;