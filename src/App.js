import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

function App() {

  return (
    <>
      <GlobalProvider>
        <Router>
          <Navbar />
          <div className="container mt-5">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
