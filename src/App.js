import logo from './logo.svg';
import './App.css';
import { Team } from './views/Team';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Dashboard } from './views/Dashboard';
import Member1 from './views/Team/member1';
import Member2 from './views/Team/member2';
import EditorialBoard from './views/Editorial-board';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import Magazine from './views/Magazine';
import Services from './views/Services';
import ContactUs from './views/ContactUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/home' element={<Home />} exact/>
        <Route path='/magazine' element={<Magazine />} exact/>
        <Route path='/services' element={<Services />} exact/>
        <Route path='/about-us' element={<AboutUs />} exact/>
        <Route path='/contact-us' element={<ContactUs />} exact/>
        <Route path='/editorial-board' element={<EditorialBoard />} exact/>
        <Route path='/vaishali-mardhekar' element={<Member1 />} exact/>
        <Route path='/medha-madhav' element={<Member2 />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
