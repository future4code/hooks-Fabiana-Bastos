import { useState } from "react";

const ApplicationFormPage = () => {
    const [addViagem, setAddViagem] = useState(false)
    const [querViagem, setQuerViagem] = useState([])
    const [numeroViagens, setNumeroViagens] = useState(0)

    const onClickViagem = (viagem) => {
        if (addViagem) {
            setAddViagem(!addViagem)
            setNumeroViagens(numeroViagens+1)
            const viagemEnviada = [...querViagem, viagem]

            setQuerViagem(viagemEnviada)

        } else {
            setAddViagem(!addViagem)
            setNumeroViagens(0)
        }
    }

    return (
        <>
            <h1>Para onde você quer ir?</h1>
            <div>
                <input placeholder="Nome"/>
                <input placeholder="E-mail"/>
                <input placeholder="Telefone"/>
                <input placeholder="Viagem desejada"/>

                <button onClick={onClickViagem}>Adicionar</button>
            </div>
        </>
    )
};

export default ApplicationFormPage;