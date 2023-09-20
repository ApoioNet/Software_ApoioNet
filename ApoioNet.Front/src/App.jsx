import './App.css' 
import Logo from './img/Logo.jpeg'

export 
function App() {
  return (
    <div className="App">
      <div className="background">
        <img src={Logo} alt="Imagem de Fundo" />
      </div>
      <div className="login-container">
        <h1>Apoio Net</h1>
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" />
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Entrar
    <i className="material-icons right">send</i>
  </button>
        </form>
      </div>
    </div>
  );
}






// import M from "materialize-css"
// import {NavBar} from "./components/navbar"
// import { Home } from "./Page/Home"
// import { useEffect } from "react"

// export function App() {
//   useEffect(() => { 
//     M.AutoInit();
//   }, [])



//   return ( 
//    <>
//     <NavBar />
//     <Home />
//    </>
//   )
// }
