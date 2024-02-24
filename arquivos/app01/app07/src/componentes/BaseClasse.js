import React from "react";
import Globais from "./Globais";

export default class BaseClasse extends React.Component{
    constructor(props){
        super(props);
        //* State
        this.state={
            canal: 'CFB Cursos',
            curso: 'React',
            ativo: true,
            nome: props.nome
        }

        //* Binding
        this.ad = this.toggleAtivo.bind(this);
        //* Instruções do construtor
    }

    //* Mudança do State
    toggleAtivo(){
        this.setState(
            (state)=>(
                {ativo: !state.ativo}
            ))
    }

    //* Métodos de clico de vida

    componentDidMount(){
        console.log('O componente foi criado');
    }

    componentDidUpdate(){
        console.log('O componente foi atualizado');
    }

    componentWillUnmount(){
        console.log('O componente foi removido');
    }

    //*Retorno
    render(){
        return (
            <div>
              <h1>{this.state.ativo?"Ativo":"Desativo"}</h1>
              <button onClick={this.ad}>Ativar/Desativar</button>
              {Globais.ano}
            </div>
          );
    }
}