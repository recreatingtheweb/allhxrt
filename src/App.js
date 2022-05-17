import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Paintings from './Paintings';
import Clothing from './Clothing';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>   
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/paintings' element={<Paintings/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/clothing' element={<Clothing/>}></Route>
          <Route path='/about' element={<About/>}></Route>


      </Routes>
      </div>
    </Router>
  );
}

export default App;
