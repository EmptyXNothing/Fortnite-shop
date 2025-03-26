import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import { useContext, useState, useEffect } from 'react';
import { OrderContext } from '../contexts/OrderProvider.jsx';
import Preloader from './Preloader.jsx';
import { toast } from 'react-toastify';

const Item = ({ name, picture, type, desc, price }) => {
  const notify = () =>
    toast.success(`${name} был добавлен в корзину`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      className: 'p-3 w-[400px] border border-purple-600/40',
    });
  const { addOrder } = useContext(OrderContext);
  const [src, setSrc] = useState(null);
  useEffect(() => {
    fetch(picture)
      .then((response) => response.blob())
      .then((image) => {
        image.type !== 'text/html'
          ? setSrc(() => URL.createObjectURL(image))
          : setSrc(() => 'https://placehold.co/400x400?text=No%20image');
      });
  }, [picture]);

  return (
    <Col>
      <Card className="h-100">
        {src ? <Card.Img variant="top" src={src} /> : <Preloader />}
        <div className="p-2 d-flex flex-column justify-content-between h-100">
          <Card.Title>{name}</Card.Title>
          <span>{desc.length ? desc : 'Нет описания'}</span>
          <div className='d-flex flex-column'>
            <span><b>Тип:</b> {type}</span>
            <span><b>Цена:</b> {price}VB</span>
            <Button
            className='w-25 my-2'
            variant="primary"
            onClick={() => {
              addOrder({ name: name, price: price });
              notify();
            }}
          >
            Buy
          </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Item;
