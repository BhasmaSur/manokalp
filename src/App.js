import logo from './logo.svg';
import './App.css';
import { Team } from './views/Team';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Dashboard } from './views/Dashboard';
import Member1 from './views/Team/member1';
import Member2 from './views/Team/member2';
import EditorialBoard from './views/Editorial-board';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} exact/>
        <Route path='/editorial-board' element={<EditorialBoard />} exact/>
        <Route path='/vaishali-mardhekar' element={<Member1 />} exact/>
        <Route path='/medha-madhav' element={<Member2 />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
