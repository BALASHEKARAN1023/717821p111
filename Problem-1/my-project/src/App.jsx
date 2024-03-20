import './App.css'
import{BrowserRouter,Routes,Route}from"react-router-dom";
import NavBar from './Componets/NavBar';
import Home from './Componets/Home'
import Login from './Componets/Login';
function App() {
  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
