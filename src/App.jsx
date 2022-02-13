import { Earth, Moon, Mars, Jupiter, Mercury } from './pages';
import { Neptune, Sun, Uranus, Venus, Ceres, Haumea } from './pages';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Earth />} />
      <Route path="/moon" element={<Moon />} />
      <Route path="/mars" element={<Mars />} />
      <Route path="/jupiter" element={<Jupiter />} />
      <Route path="/mercury" element={<Mercury />} />
      <Route path="/neptune" element={<Neptune />} />
      <Route path="/sun" element={<Sun />} />
      <Route path="/uranus" element={<Uranus />} />
      <Route path="/venus" element={<Venus />} />
      <Route path="/ceres" element={<Ceres />} />
      <Route path="/haumea" element={<Haumea />} />
    </Routes>
  );
};

export default App;
