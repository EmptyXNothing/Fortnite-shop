import Spinner from 'react-bootstrap/Spinner';

const Preloader = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Spinner
        className='m-5'
        animation="border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Preloader;
