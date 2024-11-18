import './Sobre.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';

export const Header = () => {
    return (
        <div className="home-background">
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col className='div-seach' xs='4'>
                        <div className="content-container" id='op'>
                            <p className="top-subtitle-opening">Conheça</p>
                        </div>
                    </Col>
                    <Col className='div-seach' xs='11'>
                        <div className="title-container-opening">
                            <h1 className="title-opening">Nossa História</h1>
                        </div>
                    </Col>
                    <Col className='div-seach' xs='4'>
                        <div className="content-container" id='op'>
                            <p className="subtitle-opening">Sustentare Inc</p>
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
                        <h1 className="title-aboutUs">Um olhar diferente</h1>
                        <p className="text-aboutUs">
                            A ideia da <span style={{ color: '#ff9800', fontWeight: 'bold' }}>Sustentare</span> nasceu de uma simples observação: o
                            acesso à energia sustentável é um privilégio para poucos,
                            enquanto milhões de pessoas ao redor do mundo ainda vivem
                            sem acesso seguro e contínuo à eletricidade.
                        </p>
                        <p className="text-aboutUs">
                            Durante uma viagem a uma comunidade remota no interior do
                            Brasil, um dos fundadores da Sustentare presenciou a realidade
                            de famílias que dependem de métodos precários para obter
                            energia, como geradores a diesel ou velas, enfrentando altos
                            custos e riscos à saúde.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className='image-container'>
                        <Image className='aboutUsImg' src={require('../../assets/cabos1.jpg')} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


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




export const Sobre = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Header />
                        <AboutUs />
                        <FinalHome />
                    </>
                }
            />
        </Routes>
    );
};

export default Sobre;

