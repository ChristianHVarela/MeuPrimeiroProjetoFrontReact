import React from "react";

class FormGroup extends React.Component{

    render(){
        return(
            <div className="form-group" style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

export default FormGroup