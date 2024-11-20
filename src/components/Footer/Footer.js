import "./Footer.css";
import { Container, Row, Col } from 'react-bootstrap';



export const Footer = ({ backgroundColor = "#fff", textColor = "#000" }) => {

  return (
    <div className="footer" style={{ backgroundColor, color: textColor }}>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={4} className="text-container">
            <div className="divFooter">teste</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;