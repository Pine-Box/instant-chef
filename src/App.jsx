import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import Suggestions from './components/pages/Suggestions';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <NavTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes/*" element={<Recipes />} />
        <Route path="suggestions" element={<Suggestions />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
