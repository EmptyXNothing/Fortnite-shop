import Row from 'react-bootstrap/Row';
import { useState, useEffect, useContext } from 'react';
import Item from './Item';
import Button from 'react-bootstrap/Button';
import { OrderContext } from "../contexts/OrderProvider.jsx";

const API_KEY = process.env.REACT_APP_API_KEY;

const Items = () => {
  const {handleVisible} = useContext(OrderContext)
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fortniteapi.io/v2/shop?lang=ru&date=2023-01-01', {
      headers: { Authorization: API_KEY },
    })
      .then((value) => value.json())
      .then((value) => {
        setItems(() => value.shop);
      });
  }, []);

  return (
    <div>
      <Button variant="primary" onClick={() => handleVisible()}>Purchases</Button>
      <Row xs={1} sm={1} md={2} lg={3} xl={4} xxl={6} className="g-2">
        {items.map((item) => (
          <Item
            name={item.displayName}
            picture={item.displayAssets[0]?.background}
            type={item.displayType}
            desc={item.displayDescription}
            price={item.price.finalPrice}
          />
        ))}
      </Row>
    </div>
  );
};

export default Items;
