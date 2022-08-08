import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useForms from "../config/hooks/useForms";
import { BASE_URL } from "../constants";
import { goBack } from "../config/navigate/Coordinator";
import { Countries } from "../constants/countries.js"
import { Title, Answer, Button, FormContainer } from "../config/theme/styles";

const ApplicationFormPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const { form, onChange, cleanFields } = useForms({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        trip:""
     })

    const tripApplication = (event) => {
        event.preventDefault();
    
        axios
        .post(`${BASE_URL}/trips/${id}/apply`, form)
        .then((response) => {
           cleanFields();
        })
        .catch((error) => {
           alert(error.response);
        });
    };

    const countriesDropdown = Countries.map((country) => {
        return (
           <option key={country.ordem} value={country.nome}>
              {country.nome}
           </option>
        );
     });

   

    return (
        <>
            <Title>Para onde você quer ir?</Title>
            <FormContainer onSubmit={tripApplication}>
                <br/>
                <Answer 
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder={"Nome"}
                required
                pattern={"^.{3,}"}
                title={"O nome deve ter no mínimo 3 letras"}
                />
                <br/>

                <Answer 
                name="age"
                value={form.age}
                onChange={onChange}
                placeholder={"Idade"}
                required
                min={18}
                />
                <br/>
                
                <Answer 
                name="profession"
                value={form.profession}
                onChange={onChange}
                placeholder={"Profissão"}
                required
                pattern={"^.{10,}"}
                title={"O nome deve ter no mínimo 10 caracteres"}
                />
                <br/>

                <select
                     value={form.country}
                     name="country"
                     onChange={onChange}
                     required
                  >
                     <option value="">Selecione um país</option>
                     {countriesDropdown}
                </select>
                <br/>

                <Answer
                name="applicationText"
                value={form.applicationText}
                onChange={onChange}
                placeholder={"Explique porquê você quer viajar"}
                required
                pattern={"^.{30,}"}
                title={"O nome deve ter no mínimo 30 caracteres"}
                />
                <br/>

                <Button>Enviar</Button>
            </FormContainer>
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
        </>
    )
};

export default ApplicationFormPage;