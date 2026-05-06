import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import MoviesPage from "./pages/MoviesPage";
import IPLPage from "./pages/IPLPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-main">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/ipl" element={<IPLPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>
      </main>  
    </BrowserRouter>
  );
}

export default App;
