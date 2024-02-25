
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import  CompanyPage  from './components/CompanyPage';
import WorkPage from './components/WorkPage';
import AccessPage from './components/AccessPage';
import ContactPage from './components/ContactPage';
import { BrowserRouter as Router,Route,Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from "framer-motion";

function App() {
  const location =useLocation();
  return (
      <div className="App">
        <AnimatePresence>
       
    
    
      <Header />

      <Routes location ={location} key = {location.pathname}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/CompanyPage" element={<CompanyPage />}/>
        <Route path="/WorkPage" element={<WorkPage />}/>
        <Route path="/AccessPage" element={<AccessPage />}/>
        <Route path="/ContactPage" element={<ContactPage />}/>
    
        </Routes>
      <Footer />
    
 
    </AnimatePresence>
      </div>
  );
}

export default App;
