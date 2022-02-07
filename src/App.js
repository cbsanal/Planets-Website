import Earth from "./pages/Earth";
import Moon from "./pages/Moon";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Earth />} />
      <Route path="/moon" element={<Moon />} />
    </Routes>
  );
};

export default App;
