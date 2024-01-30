
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import  CompanyPage  from './components/CompanyPage';
import WorkPage from './components/WorkPage';
import AccessPage from './components/AccessPage';
import ContactPage from './components/ContactPage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
    
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/CompanyPage" element={<CompanyPage />}/>
        <Route path="/WorkPage" element={<WorkPage />}/>
        <Route path="/AccessPage" element={<AccessPage />}/>
        <Route path="/ContactPage" element={<ContactPage />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
