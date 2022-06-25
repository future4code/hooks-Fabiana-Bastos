import styled from "styled-components";

const ContainerHeader = styled.div`
    border-color: #274046;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`
const Title = styled.h1`
    font-size: 3em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding-right: 1em;
    text-align: right;
    color: #274046;
`;

const Header = () => {

    return (
        <>
            <ContainerHeader>
            <Title href="/">LabeX</Title>
            </ContainerHeader>
        </>
    )
}

export default Header;