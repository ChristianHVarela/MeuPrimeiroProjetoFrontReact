import React from "react";

class Input extends React.Component{

    render(){
        return(
            <div>
            <label style={{marginBottom: '5px'}} >{this.props.label}</label>
            <input type={this.props.type} class="form-control" id={this.props.id} aria-describedby={this.props.aria} placeholder={this.props.placeholder} 
            onChange={this.props.change} onClick={this.props.click}/>
            </div>
        )
    }

}

export default Input