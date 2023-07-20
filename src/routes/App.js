import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home";
import Politique from "../pages/politique/Politique";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Politique" element={<Politique />} />
        </Routes>
      </Router>
  );
}

export default App;