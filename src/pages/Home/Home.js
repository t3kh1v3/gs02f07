import './Home.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar/Navbar.js';

export const Header = () => {
    const title = "Sustentare";

    return (
        <div className="home-background">
        <Container fluid>
            <Row className='justify-content-center'>
            <Col className='div-seach' xs='10'>
                <div className="title-container-opening">
                    <h1 className="title-opening">
                        {title.split("").map((letter, index) => (
                        <span key={index} className="letter">
                            {letter}
                        </span>
                        ))}
                    </h1>
                </div>
            </Col>
            <Col className='div-seach' xs='4'>
                <div className="content-container" id='op'>
                    <p className="subtitle-opening">
                        Transformando o Futuro através da Energia Renovável
                    </p>
                    <Button as={ Link } to="/Projeto" variant="outline-dark" className="cta-button">Saiba mais</Button>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <Container fluid>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12} md={4} className='text-container'>
                        <h1 className="title-aboutUs">Quem Somos</h1>
                        <p className="text-aboutUs">
                            A <span style={{ color: '#ff9800', fontWeight: 'bold' }}>Sustentare</span> nasceu para transformar o acesso à energia, oferecendo
                            soluções inovadoras para ONGs e comunidades carentes. Acreditamos que
                            a energia limpa é essencial, tanto para o meio ambiente quanto para
                            gerar impacto social positivo.
                        </p>
                        <p className="text-aboutUs">
                            Nosso foco é democratizar o acesso a tecnologias renováveis, conectando
                            ONGs, investidores e comunidades para criar projetos que realmente fazem
                            a diferença. Juntos, construímos um futuro mais justo e sustentável.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className='image-container'>
                        <Image className='aboutUsImg' src={require('../../assets/aboutUs.jpg')} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export const OurTeam = () => {
    return (
        <div className='ourTeam'>
            <Container fluid>
            <Row className='justify-content-center'>
                <Col className='div-seach' xs='10'>
                    <div className="title-container-ourTeam">
                      <h1 className="title-ourTeam">Nosso Time</h1>
                    </div>
                        <Row className='justify-content-center'>
                        <Col xs={3}>
                            <Card className='group-card-body'>
                            <Card.Img variant="top" src={require('../../assets/david.jpg')} />
                            <Card.Body>
                                <Card.Title className='group-card-body-title'>David Moura</Card.Title>
                                <Card.Subtitle className='group-card-body-subtitle'>Software Engineer</Card.Subtitle>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3}>
                            <Card className='group-card-body'>
                            <Card.Img variant="top" src={require('../../assets/matheus.png')} />
                            <Card.Body>
                                <Card.Title className='group-card-body-title'>Matheus Siqueira</Card.Title>
                                <Card.Subtitle className='group-card-body-subtitle'>Software Engineer</Card.Subtitle>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3}>
                            <Card className='group-card-body'>
                            <Card.Img variant="top" src={require('../../assets/pedro.jpg')} />
                            <Card.Body>
                                <Card.Title className='group-card-body-title'>Pedro Henrique Alves</Card.Title>
                                <Card.Subtitle className='group-card-body-subtitle'>Software Engineer & Design</Card.Subtitle>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3}>
                            <Card className='group-card-body'>
                            <Card.Img variant="top" src={require('../../assets/lucas.jpg')} />
                            <Card.Body>
                                <Card.Title className='group-card-body-title'>Lucas Terra</Card.Title>
                                <Card.Subtitle className='group-card-body-subtitle'>VideoMaker & Design</Card.Subtitle>
                            </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                </Col>
            </Row>
            </Container>
            </div>
        )
}
export const VideoPitch = () => {
    return (
        <div className='home-video-pitch'>
        <Container fluid>
        <Row className='justify-content-center'>
            <Col className='div-seach' xs='10'>
            <div className='video-pitch'>
                <iframe
                    width="75%"
                    height="750"
                    src="https://www.youtube.com/embed/ea08mJUU9Y4?si=SRrDZ3XitsQd-9Bt"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    />
            </div>
            </Col>
        </Row>
        </Container>
    </div>
    )
}
export const FinalHome = () => {
    return (
        <div className='final-home'>
            <Container fluid>
                <div className='final-home-content'>
                    <div className='text-container'>
                        <h1 className="title-final">Conheça Nossa História</h1>
                        <Button as={ Link } to="/Sobre" variant="outline-dark" className="history-button">Sobre Nós</Button>
                        <div className='socialContact'>
                            <p className='email-tel'>
                                contato@sustentare.com <br />
                                4002-8922
                            </p>
                        </div>
                    </div>
                    <div className='image-container'>
                        <Image className='aboutUsImg' src={require('../../assets/final.jpg')} />
                    </div>
                </div>
            </Container>
        </div>
    );
};
export const Home = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar backgroundColor="#231f20" iconColor="#231f20" />
              <Header />
              <AboutUs />
              <OurTeam />
              <VideoPitch />
              <FinalHome />
            </>
          }
        />
      </Routes>
    );
  };
  
  export default Home;