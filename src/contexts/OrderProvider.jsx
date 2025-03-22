import { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = (props) => {
  const [visible, setVisible] = useState(false);
  const [order, setOrder] = useState([]);

  const handleVisible = () => {
    setVisible(() => !visible);
  };

  const addOrder = (newItem) => {
    const item = order.find((i) => i.name === newItem.name);
    if (!item) {
      newItem.count = 1;
      setOrder(() => [...order, newItem]);
    } else {
      item.count += 1;
      const newOrder = order.map((i) => (i.name === item.name ? item : i));
      setOrder(() => newOrder);
    }
  };

  const deleteOrder = (itemChange) => {
    const item = order.find((i) => i.name === itemChange.name);
    console.log(item.count);
    if (!item) {
      return;
    }
    if (item.count > 1) {
      item.count -= 1;
      const newOrder = order.map((i) => (i.name === item.name ? item : i));
      setOrder(() => newOrder);
    } else {
      setOrder(() => order.filter((i) => i.name !== item.name));
    }
  };

  const value = {
    handleVisible,
    visible,
    addOrder,
    deleteOrder,
    order,
  };

  return (
    <OrderContext.Provider value={value}>
      {props.children}
    </OrderContext.Provider>
  );
};
