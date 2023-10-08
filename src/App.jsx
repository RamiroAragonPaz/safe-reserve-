import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar"
import Home from "./pages/home"
import FormSignUp from './pages/formSignUp';
import MainPage from './pages/mainPage';
import FormLogIn from './pages/formLogIn';

function App() {
   return (
    <>
    <Router>
      <Navbar/>
    <Routes>          
        <Route path="/" element={<Home />} />  
        <Route path="/signin" element={<FormSignUp />} /> 
        <Route path="/login" element={<FormLogIn />} /> 
        <Route path="/mainpage" element={<MainPage />} />  
      </Routes>    
      </Router>
    </>
  )
}

export default App
