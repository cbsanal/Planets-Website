import { Link } from 'react-router-dom';

const OtherOptions = ({ setShowOptions }) => {
  const navigationList = ['', 'mars', 'jupiter', 'moon', 'mercury', 'neptune', 'sun', 'uranus', 'venus'];
  return (
    <div className="other-options">
      <div className="options-container">
        {navigationList.map((option) => (
          <Link className="option" key={`${option}`} to={`/${option}`}>
            {option ? option.charAt(0).toUpperCase() + option.slice(1) : 'Earth'}
            {(option === 'mars' || option === 'moon') && <span className="star"></span>}
          </Link>
        ))}
      </div>
      <span onClick={() => setShowOptions(false)} className="close-icon"></span>
    </div>
  );
};

export default OtherOptions;
