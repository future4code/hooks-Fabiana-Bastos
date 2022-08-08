import styled from "styled-components";
import face from "./img/face.png";
import insta from "./img/insta.png";

const ContainerHeader = styled.div`
    border-color: #274046;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: bottom fixed;

`
const Title = styled.p`
    font-size: 1em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding-right: 1em;
    text-align: right;
    color: #fffffc;
`;

const Footer = () => {

    return (
        <>
            <ContainerHeader>
                <Title href="/">Todos os direitos reservados ©</Title>
            </ContainerHeader>
            <ContainerHeader>
                <img src={insta} alt="Instagram"/>
                <img src={face} alt="Facebook"/>
            </ContainerHeader>
        </>
    )
}

export default Footer;