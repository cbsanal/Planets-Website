import { Link } from 'react-router-dom';
import navigationList from './options';
const OtherOptions = ({ setShowOptions }) => {
  return (
    <div className="other-options">
      {navigationList.map((option) => (
        <Link key={`${option}`} to={`/${option}`}>
          {option ? option.charAt(0).toUpperCase() + option.slice(1) : 'Earth'}
        </Link>
      ))}
      <span onClick={() => setShowOptions(false)} className="close-icon"></span>
    </div>
  );
};

export default OtherOptions;
