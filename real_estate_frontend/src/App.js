
import './App.css';
import Signup from './Component/Signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Component/Signin/Signin';
import SideBar from './Component/Dashboard/SideBar';
<<<<<<< HEAD
import Content from './Component/Dashboard/DashboardContent';
=======
import GeneralInfo from './Component/General Info/generalInfo';
import LocationInfo from './Component/locationInfo/locationInfo';
>>>>>>> 1e0546f4f03081151677e751dccebb80af76ae5a

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
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
