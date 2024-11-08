import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dog from "./Dog.jsx";
import Cat from "./Cat.jsx";
import Fish from "./Fish.jsx";

export default function App() {
  return (
    <div>
      <Router>
        <header>
          <h1>Welcome to the Animal Page</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/dog">Dog</Link>
            </li>
            <li>
              <Link to="/cat">Cat</Link>
            </li>
            <li>
              <Link to="/fish">Fish</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Dog />} />
            <Route path="/dog" element={<Dog />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/fish" element={<Fish />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
