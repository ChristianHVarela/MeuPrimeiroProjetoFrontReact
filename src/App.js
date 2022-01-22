import React from "react";
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from "./View/login";
import CadastroUsuario from "./View/cadastroUsuario";
import "./custom.css"


class App extends React.Component {

  render(){
    return (
      <div>
        <CadastroUsuario />
      </div>
    )
  }

}

export default App;
