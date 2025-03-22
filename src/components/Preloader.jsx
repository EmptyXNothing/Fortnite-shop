import Spinner from 'react-bootstrap/Spinner';

const Preloader = () => {
  return (
    <Spinner
      className="position-relative"
      animation="border"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Preloader;
