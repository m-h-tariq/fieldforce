import './App.css';
import Overview from './Pages/Overview/Overview';
import Plans from './Pages/Plans/Plans';
import {
  
  Route,
  
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Company from './Pages/Company/Company';
import ContactUs from './Pages/ContactUs/ContactUs';




function App() {
  return (
   <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/plans' element={<Plans/>}/>
      <Route path='/' element={<Overview/>}/>
      <Route path='/company' element={<Company />}/>
      <Route path='/contact' element={<ContactUs />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    
    
   </div>
  );
}

export default App;
