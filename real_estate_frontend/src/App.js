
import './App.css';
import Signup from './Component/Signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Component/Signin/Signin';
import SideBar from './Component/Dashboard/SideBar';
import Content from './Component/Dashboard/DashboardContent';
import GeneralInfo from './Component/General Info/generalInfo'
import LocationInfo from './Component/locationInfo/locationInfo'
import Basic from "./Forms/Basicinfo"
import PropertyDetails from "./Forms/Propertydetail"
import GeneralInfo from './Component/General Info/generalInfo';
import LocationInfo from './Component/locationInfo/locationInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/SideBar' element={<SideBar/>}/>
        <Route path='/Content' element={<Content/>}/>
        <Route path='/generalInfo' element={<GeneralInfo/>}/>
        <Route path='/locationInfo' element={<LocationInfo/>}/>
        <Route path='/Basicinfo' element={<Basic/>}/>
        <Route path='/Propertydetail' element={<PropertyDetails/>}/>


      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
