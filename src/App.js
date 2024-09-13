import Navbar from './navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './blogdetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/create" element={<Create />} />

          <Route exact path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
