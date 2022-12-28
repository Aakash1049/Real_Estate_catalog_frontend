
import './App.css';
import Signup from './Component/Signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Component/Signin/Signin';
import SideBar from './Component/Dashboard/SideBar'
import Basic  from './Forms/Basicinfo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/d' element={<SideBar/>}/>
        <Route path='/Basicinfo' element={<Basic/>}/>    
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
