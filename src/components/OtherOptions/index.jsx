import { Link } from 'react-router-dom';
import navigationList from './options';

const OtherOptions = ({ setShowOptions }) => {
  return (
    <div className="other-options">
      <div className="options-container">
        {navigationList.map((option) => (
          <Link className="option" key={`${option}`} to={`/${option}`}>
            {option ? option : 'Earth'}
            {(option === 'mars' || option === 'moon') && <span className="star"></span>}
          </Link>
        ))}
      </div>
      <span onClick={() => setShowOptions(false)} className="close-icon"></span>
    </div>
  );
};

export default OtherOptions;
