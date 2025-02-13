import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Container from "./components/common/Layouts/container";
import ResultPage from "./pages/ResultPage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/QuestionPage/:id" element={<QuestionPage />} />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </Container>
  );
}

export default App;
