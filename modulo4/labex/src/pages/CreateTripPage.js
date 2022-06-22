import useProtectedPage from "./hooks/useProtectedPage";

const CreateTripPage = () => {
    return (
        useProtectedPage();

        <>
            <h1>Página criar de viagem</h1>
        </>
    )
};

export default CreateTripPage;