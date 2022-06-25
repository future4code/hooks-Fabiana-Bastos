import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import NovoPost from './components/NovoPost/NovoPost'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts : [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "fabiana",
        fotoUsuario: "https://picsum.photos/id/237/200/300",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "mário",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      }
    ]
  };

  render() {
    const listaDePostagens = this.state.posts.map ((postagens) => {
      return (
        <p>
          <Post nomeUsuario = {postagens.nomeUsuario} fotoUsuario = {postagens.fotoUsuario} fotoPost = {postagens.fotoPost}/>
        </p>
      );

    })
    return (
      <>
        <MainContainer>
          {listaDePostagens}
          <NovoPost/>
        </MainContainer>
      </>
    );
  }
}

export default App;