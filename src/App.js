import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './screens/home';
import ServiceListing from './screens/ServiceListing';
import Login from './screens/Login';
import Signup from './screens/Signup';
import LawyerRegister from './screens/LawyerRegister';
import LawyerLogin from './screens/LawyerLogin';
import AboutUs from './screens/AboutUs'
import Aftersign from './screens/Aftersign';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/loginuser' element={<Login />} />
      <Route path='/signupuser' element={<Signup />} />
      <Route path='/loginlawyer' element={<LawyerLogin />} />
      <Route path='/signuplawyer' element={<LawyerRegister />} />
      <Route path="/servicelisting" element={<ServiceListing />} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/show" element={<Aftersign/>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
