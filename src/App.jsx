import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import Container from "./components/layout/Container"
import CreateTime from "./components/pages/CreateTime";
import NavBar from "./components/layout/NavBar";
import CadastroCliente from "./components/pages/CadastroCliente";
import CreateProcedimento from "./components/pages/CreateProcedimentos"
import "./App.css"


function App() {
  
  return (

    <>

        <BrowserRouter >

        <Container>

          <Routes>

            <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/createTime' element={<CreateTime/>}/>
              <Route path='/cadastroProcedimento' element={<CreateProcedimento/>}/>
              <Route path='/cadastroCliente' element={<CadastroCliente/>}/> 
            </Route>

          </Routes>

        </Container>

        </BrowserRouter>

    </>

    );
  };
  
  export default App