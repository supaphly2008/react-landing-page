import { BrowserRouter as Router } from "react-router-dom";
import "locale/i18n";
import "./App.css";
import Home from "pages";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
