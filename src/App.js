import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="excerise/:id" element={{ ExerciseDetails }} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
