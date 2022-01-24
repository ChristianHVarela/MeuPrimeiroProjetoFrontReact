import React from "react";

function SelectMenu(props){
    
    
    const options = props.lista.map(option =>{
        return(
            <option value={option.val}>{option.key}</option>
        )
    })

    return(
        <div>
            <select {...props} >
                {options}
            </select>
        </div>
    )
}

export default SelectMenu