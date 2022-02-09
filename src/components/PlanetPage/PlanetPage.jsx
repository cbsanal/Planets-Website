import { useState } from "react";
import OtherOptions from "../OtherOptions/OtherOptions";
const PlanetPage = ({ planetName, planetInfo }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="planet-container">
      {showOptions && <OtherOptions setShowOptions={setShowOptions} />}
      <button className="custom-btn btn-10 x">i</button>
      <div className="planet-info-container">
        <div className="title">{planetName}</div>
        {planetInfo}
      </div>
      <canvas id="webgl"></canvas>
      <button
        onClick={() => setShowOptions(true)}
        className="custom-btn btn-10"
      >
        Other Planets
      </button>
    </div>
  );
};

export default PlanetPage;
