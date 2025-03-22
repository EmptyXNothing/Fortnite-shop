import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar className="bg-primary mb-2 rounded-bottom">
      <Container>
        <Navbar.Brand className="text-white" href="#home">Fortnite shop</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
