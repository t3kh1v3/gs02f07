import './Projeto.css';
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
                            <h1 className="title-opening">Nosso Projeto</h1>
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

export const OurProjects = () => {
    return (
        <div className='our-project'>
            <Container fluid>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12} md={4} className='text-container'>
                        <h1 className="title-OurProjects">Como entregar energia sustentável e de qualidade para todo mundo?</h1>
                        <p className="text-OurProjects">
                            Entregar energia sustentável e de qualidade para todos exige esforços conjuntos entre governos, empresas, ONGs e comunidades. Para isso, é essencial investir em tecnologias de energia renovável, como solar, eólica e biomassa, além de expandir a infraestrutura de energia em regiões que ainda não têm acesso adequado. Somente com ações coordenadas será possível alcançar um impacto significativo e duradouro.
                        </p>
                        <p className="text-OurProjects">
                            Nosso programa contribui para essa missão conectando ONGs a doadores comprometidos com a universalização do acesso à energia limpa e acessível. Por meio da centralização de doações, facilitamos a distribuição de recursos e equipamentos necessários para viabilizar soluções energéticas sustentáveis em áreas vulneráveis, promovendo mais inclusão e qualidade de vida.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className='image-container'>
                        <Image className='ProjectImg' src={require('../../assets/background.jpg')} fluid />
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

export const Projeto = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Header />
                        <OurProjects />
                        <FinalHome />
                    </>
                }
            />
        </Routes>
    );
};

export default Projeto;