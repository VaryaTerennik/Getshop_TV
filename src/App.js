import GeneralPage from "./components/GeneralPage";
import PromoZone from "./components/PromoZone";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<GeneralPage />}></Route>
        <Route path="/promozone" element={<PromoZone />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
