import React from 'react';
import styled from 'styled-components'

const InputContainer = styled.input`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50px;
`

class NovoPost extends React.Component {
    state = {
        postagemNova: [
            {
                valorInputUsuario: "",
                valorInputFoto: "",
                valorInputPostagem: "",
            }
        ]
    };

    adicionaPostagem = () => {
        const novaPostagem = {
          nomeUsuario: this.state.valorInputUsuario,
          fotoUsuario: this.state.valorInputFoto,
          fotoPost: this.state.fotoPost
        };
    
        const addPost = [...this.state.posts, novaPostagem];
        this.setState({posts: addPost});
      };
    
      onChangeInputUsuario = (event) => {
        this.setState({valorInputUsuario: event.target.value});
      };
    
      onChangeInputFoto = (event) => {
        this.setState({valorInputFoto: event.target.value});
      };
    
      onChangeInputPostagem = (event) => {
        this.setState({valorInputPostagem: event.target.value});
      };
    
    render() {
        return (
            <div>
                <InputContainer>
                    value: {this.state.valorInputUsuario}
                    onChange: {this.state.onChangeInputUsuario}
                    placeholder:{"Usuário"}
                </InputContainer>

                <InputContainer>
                    value: {this.state.valorInputFoto}
                    onChange: {this.state.onChangeInputFoto}
                    placeholder:{"Foto do usuário"}
                </InputContainer>

                <InputContainer>
                    value: {this.state.valorInputPostagem}
                    onChange: {this.state.onChangeInputPostagem}
                    placeholder:{"Postagem"}
                </InputContainer>

                <button onClick={this.addPost}>Adicionar Postagem</button>
            </div>
        );
    }
}

export default NovoPost;