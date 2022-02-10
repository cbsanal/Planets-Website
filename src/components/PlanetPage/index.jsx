import { useState } from "react";
import OtherOptions from "../OtherOptions";
const PlanetPage = ({ planetName, planetInfo }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  return (
    <div className="planet-container">
      {showOptions && <OtherOptions setShowOptions={setShowOptions} />}
      <button
        onClick={() => setShowInfo(!showInfo)}
        className={`${showInfo ? "active" : ""} info-btn btn`}
      >
        i
      </button>
      {showInfo && (
        <div className="planet-info-container">
          <div className="title">{planetName}</div>
          {planetInfo}
        </div>
      )}
      <canvas id="webgl"></canvas>
      <button onClick={() => setShowOptions(true)} className="btn">
        Other Planets
      </button>
    </div>
  );
};

export default PlanetPage;
