import React from "react";

class Button extends React.Component{

    render(){
        return(
            <button className={this.props.color} type="button" onClick={this.props.click} onChange={this.props.change}>
                {this.props.children}
            </button>
        )
    }
}

export default Button