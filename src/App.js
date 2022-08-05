import React from "react";

export default class App extends React.Component {
  state = {
    tarefa: "",
    lista: []
  };
  handleChange = (e) => {
    this.setState({ tarefa: e.target.value });
  };
  add = () => {
    if (this.state.tarefa !== "" && !this.state.tarefa.match(/^[  \t]+$/)) {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };
  remove = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => item.id !== id)
    });
  };
  render() {
    return (
      <div>
        <h1>Lista do Dia</h1>
        <input onChange={this.handleChange} value={this.state.tarefa} />
        <button onClick={this.add}>Adicionar</button>
        {this.state.lista.map((rastreador) => (
          <div>
            <ul>
              <li>{rastreador.tarefa}</li>
            </ul>
            <button onClick={() => this.remove(rastreador.id)}>X</button>
          </div>
        ))}
      </div>
    );
  }
}