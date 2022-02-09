import { Link } from "react-router-dom";
const OtherOptions = ({ setShowOptions }) => {
  return (
    <div className="other-options">
      <Link to="/" className="option">
        Earth
      </Link>
      <Link to="/mars" className="option">
        Mars
      </Link>
      <Link to="/jupiter" className="option">
        Jupiter
      </Link>
      <Link to="/moon" className="option">
        Moon
      </Link>
      <div onClick={() => setShowOptions(false)} className="close">
        close
      </div>
    </div>
  );
};

export default OtherOptions;
