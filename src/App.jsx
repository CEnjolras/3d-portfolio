import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import WaitingPage from "./pages/WaitingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WaitingPage />} />
      <Route path="/home" element={<Home view="home" />} />
      <Route path="/skills" element={<Home view="skills" />} />
      <Route path="/realisations" element={<Home view="realisations" />} />
      <Route path="/contact" element={<Home view="contact" />} />
      <Route path="/dev" element={<Home view="dev" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
