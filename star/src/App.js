import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import PersonalInside from "./pages/PersonalInside";
import PersonalHome from "./pages/PersonalHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/outside/*" element={<PersonalHome />} />
        <Route path="/inside/*" element={<PersonalInside />} />
      </Routes>
    </Router>
  );
}

export default App;
