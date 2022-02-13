import loading from '../../images/loading.gif';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-container">
        <img src={loading} alt="loading-gif" />
        <span className="loading-container-text">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
