
import './App.css';
import Signup from './Component/Signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Component/Signin/Signin';
import SideBar from './Component/Dashboard/SideBar';
import GeneralInfo from './Component/General Info/generalInfo';
import LocationInfo from './Component/locationInfo/locationInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<SideBar/>}/>
        <Route path='/generalInfo' element={<GeneralInfo/>}/>
        <Route path='/locationInfo' element={<LocationInfo/>}/>
        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
