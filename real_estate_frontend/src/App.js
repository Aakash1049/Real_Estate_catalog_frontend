
import './App.css';
import Signup from './Component/Signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Component/Signin/Signin';
import SideBar from './Component/Dashboard/SideBar';
<<<<<<< HEAD
import GeneralInfo from './Component/General Info/generalInfo';
import LocationInfo from './Component/locationInfo/locationInfo';
import Content from "./Component/Dashboard/DashboardContent"
=======
import Content from './Component/Dashboard/DashboardContent';

>>>>>>> 12f8bf29d8b7a2023fe8d9475d2f5c84fa879ff5
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

      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
