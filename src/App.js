import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductListing from "./Components/ProductListing";
import ProductDetail from "./Components/ProductDetail";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
