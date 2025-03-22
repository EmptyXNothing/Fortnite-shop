import Order from "./Modal";
import Items from "./Items";
import { ToastContainer } from 'react-toastify';

const MainPage = () => {
  return <>
      <ToastContainer />
      <Items />
      <Order />
    </>
}

export default MainPage;