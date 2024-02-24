import React from "react";
import CampoFormulario from './CampoFormulario';

export default class FormularioIMC extends React.Component{
    constructor(props){
        super(props);
    }

    handlePeso(peso){
        this.props.setPeso(peso);
    }

    handleAltura(altura){
        this.props.setAltura(altura);
    }

    calcularIMC(peso,altura){
        return peso/(altura**2);
    }

    handleCalculoIMC(imc){
        this.props.setIMC(imc);
    }

    render(){
        return(
            <section id='formularioIMC'>
                <CampoFormulario label='Informe seu peso: ' type='number' value={this.props.peso} handleInput={this.handlePeso} min='0' step='0.1' name='f_peso' id='f_peso'/>
                <CampoFormulario label='Informe sua Altura: ' type='number' value={this.props.altura} handleInput={this.handleAltura} min='0' step='0.01' name='f_altura' id='f_altura'/>
                <button onClick={()=>this.handleCalculoIMC(this.calcularIMC(this.props.peso,this.props.altura))}>Calcular</button>
            </section>
        )
    }
}