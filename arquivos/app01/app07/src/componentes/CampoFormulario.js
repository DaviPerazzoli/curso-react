import React from "react";

export default class CampoFormulario extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="campoFormulario">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type={this.props.type} value={this.props.value} onChange={(el)=>this.props.handleInput(el.target.value)} min={this.props.min} step={this.props.step} name={this.props.name} id={this.props.id}/>
            </div>
        )
    }
}