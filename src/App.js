import Earth from "./pages/Earth";
import Moon from "./pages/Moon";
import Mars from "./pages/Mars";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Earth />} />
      <Route path="/moon" element={<Moon />} />
      <Route path="/mars" element={<Mars />} />
    </Routes>
  );
};

export default App;
