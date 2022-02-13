import { useState } from 'react';
import OtherOptions from '../OtherOptions';
import Loading from '../Loading';
const PlanetPage = ({ planetName, planetInfo, display }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  return (
    <>
      {display === 'none' && <Loading />}
      {/* I need canvas to be rendered, this is why I'm using display: none */}
      <div className="planet-container" style={{ display: `${display}` }}>
        <canvas id="webgl"></canvas>
        {showOptions && <OtherOptions setShowOptions={setShowOptions} />}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className={`${showInfo ? 'active' : ''} info-btn btn`}
        >
          i
        </button>
        {showInfo && (
          <div className="planet-info-container">
            <div className="title">{planetName}</div>
            {planetInfo}
          </div>
        )}
        <button onClick={() => setShowOptions(true)} className="btn">
          Other Planets
        </button>
      </div>
    </>
  );
};

export default PlanetPage;
