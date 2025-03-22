import Container from "react-bootstrap/Container";
import MainPage from "./MainPage.jsx";
import Header from "./Header.jsx";
import { OrderProvider } from "../contexts/OrderProvider.jsx";

const App = () => {
  return (
    <OrderProvider>
      <Container>
        <Header />
        <MainPage />
      </Container>
    </OrderProvider>
  );
};

export default App;
