import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './src/components/NavTabs';
import Home from './src/components/pages/Home';
import Recipes from './src/components/pages/Recipes';
import Suggestions from './src/components/pages/Suggestions';
import Contact from './src/components/pages/Contact';

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
