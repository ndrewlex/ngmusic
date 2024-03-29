import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchResultPage from "./pages/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/*" element={<SearchResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
