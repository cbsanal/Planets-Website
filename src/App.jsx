import { Earth, Moon, Mars, Jupiter, Mercury, Neptune, Sun, Uranus, Venus } from './pages';
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
    </Routes>
  );
};

export default App;
