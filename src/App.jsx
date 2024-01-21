import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import StartPage from "./pages/StartPage";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<StartPage />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/score" element={<FinalScreen />} />
          <Route />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
