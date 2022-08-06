import styled from "styled-components";

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #274046;
`;

export const Subtitle = styled.h2`
    font-size: 1.2em;
    text-align: center;
    color: #274046;
`
export const ButtonContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
  background: #274046;
  color: #fffffc;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #fffffc;
  border-radius: 3px;
  text-align: center;
`;

export const InfoContainer = styled.div`
    border-style: solid;
    margin: 2ch;
    border-color: #274046;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #fffffc;
`

export const Info = styled.p`
    font-size: 1.2em;
    color: #274046;
    padding-left: 0.5em;
    padding-right: 0.5em;
`

export const FormContainer = styled.form`
    border-style: solid;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    grid-gap: 5px;
`

export const Answer = styled.input`

    background-color: #fffffc;
    color: #ed3017;

    width: 20em;
    height: 2em;

    border-style: none;
`

export const Input = styled.div`
    border-color: #274046;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
`