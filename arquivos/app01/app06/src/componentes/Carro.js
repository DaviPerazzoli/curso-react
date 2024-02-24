import React from "react";

export default class Carro extends React.Component{
    constructor(props){
        super(props);
        this.modelo='Golf';
        this.state={
            ligado:false,
            velAtual:0,
        }

        this.toggleLigadoBinded=this.toggleLigado.bind(this);
    }

    toggleLigado(){
        // this.state.ligado=true

        // this.setState({
        //     ligado:!this.state.ligado
        // });

        this.setState(
            (state)=>{
                return {ligado:!state.ligado};
            }
        );
    }

    acelerar(){
        this.setState(
            (state,props)=>(
                {velAtual:state.velAtual+props.fator}
            )
        )
    }

    componentDidMount(){
        console.log('O carro foi criado');
    }

    componentDidUpdate(){
        console.log('O carro foi atualizado');
    }

    componentWillUnmount(){
        console.log('O carro foi retirado');
    }

    render(){
        return(
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>{this.state.ligado?'Ligado':'Desligado'}</p>
                <p>Velocidade atual: {this.state.velAtual}</p>
                <button onClick={this.toggleLigadoBinded}>{this.state.ligado?'Desligar':'Ligar'}</button>
                <button onClick={()=>this.acelerar()}>acelerar</button>
                
            </div>
        );
    }
}