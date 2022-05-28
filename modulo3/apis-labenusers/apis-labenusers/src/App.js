import React from 'react'
import Form from './Components/form'
import Lista from './Components/lista'


export default class App extends React.Component {
  state = {
    page: false
  };

  irEdição = () => {
    this.setState({ page: true });
  };

  irForm = () => {
    this.setState({ page: false });
  };

  render() {

    let site = this.state.page ? (
      <Form onClickirEdição={this.irForm} />
    ) : (
      <Lista onClickirForm={this.irEdição} />
    );

    return (
      <div>{site}</div>
    )
  }
}