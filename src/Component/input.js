import React from "react";

class Input extends React.Component{

    render(){
        return(
            <div>
            <label style={{marginBottom: '2px'}} >{this.props.label}</label>
            <input type={this.props.type} class="form-control" id={this.props.id} aria-describedby={this.props.aria} placeholder={this.props.placeholder} 
            onChange={this.props.change} onClick={this.props.click} pattern={this.props.pattern} />
            </div>
        )
    }

}

export default Input