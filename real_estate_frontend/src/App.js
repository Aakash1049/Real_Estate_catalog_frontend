
import './App.css';
import Signup from './Component/Signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Component/Signin/Signin';
<<<<<<< HEAD
import SideBar from './Component/Dashboard/SideBar'
import Basic  from './Forms/Basicinfo';

=======
import SideBar from './Component/Dashboard/SideBar';
<<<<<<< HEAD
import Content from './Component/Dashboard/DashboardContent';
=======
import GeneralInfo from './Component/General Info/generalInfo';
import LocationInfo from './Component/locationInfo/locationInfo';
>>>>>>> 1e0546f4f03081151677e751dccebb80af76ae5a
>>>>>>> 8187e5d784ef3d98a33606d7fdbb1c389f0509a6

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
<<<<<<< HEAD
        <Route path='/d' element={<SideBar/>}/>
        <Route path='/Basicinfo' element={<Basic/>}/>    
=======
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/SideBar' element={<SideBar/>}/>
        <Route path='/Content' element={<Content/>}/>
>>>>>>> 8187e5d784ef3d98a33606d7fdbb1c389f0509a6
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
