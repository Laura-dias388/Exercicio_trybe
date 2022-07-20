import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

/* function App() {// Componente funcional: Função que retorna um jsx;
  return (
    <div className="App">
      <h1>Olá Mundo!!</h1>
    </div>
  ) */
  // classes conseguem agrupar um conjunto de propriredades em conjuntos de métodos;
  // para extender o que a classe herda usa-se o extends;
  // E o nome da classe que vamos extender: Component;

  class App extends Component {
    render() {// por trás dos panos o react entende que essa função é responsável por renderizar o conteúdo; Responsável por retornar o jsx;
      return (
        <HelloWorld />
    );
  }  
}

export default App;
