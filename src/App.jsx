import Earth from "./pages/Earth";
import Moon from "./pages/Moon";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Earth />} />
      <Route path="/moon" element={<Moon />} />
      <Route path="/mars" element={<Mars />} />
      <Route path="/jupiter" element={<Jupiter />} />
    </Routes>
  );
};

export default App;
