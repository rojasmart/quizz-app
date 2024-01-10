import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<StartPage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/score" element={<FinalScreen />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
