import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './screens/home';
import ServiceListing from './screens/ServiceListing';
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/servicelisting" element={<ServiceListing />} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
