import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { OrderContext } from '../contexts/OrderProvider.jsx';

const Order = () => {
  const { handleVisible, visible, order, addOrder, deleteOrder } = useContext(OrderContext);
  const totalPrice = order.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  return (
    <Modal show={visible} onHide={() => handleVisible()}>
      <Modal.Header closeButton>
        <Modal.Title>Покупки</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {order.map((item) => (
          <div className='d-flex gap-2 justify-content-between align-items-center m-2'>
            <span>
              {item.name} {item.price}VB (x{item.count})
            </span>
            <div className='d-flex gap-2'>
              <Button variant="primary" size="sm" onClick={() => addOrder(item)} >+</Button>
              <Button variant="secondary" size="sm" onClick={() => deleteOrder(item)}>-</Button>
            </div>
          </div>
        ))}
      </Modal.Body>
      <div className="d-flex gap-2 justify-content-between align-items-center m-2">
        <span>Итог: {totalPrice}</span>
        <div className="d-flex gap-3">
          <Button variant="primary">Купить</Button>
          <Button variant="secondary" onClick={() => handleVisible()}>
            Закрыть
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Order;
