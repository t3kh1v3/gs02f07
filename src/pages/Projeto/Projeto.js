import './Projeto.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar/Navbar.js'
import { Footer } from '../../components/Footer/Footer.js'

export const HeaderProject = () => {
    return (
        <div className="project-background">
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col className='div-seach' xs='4'>
                        <div className="content-container" id='op'>
                            <p className="top-subtitle-project">Conheça</p>
                        </div>
                    </Col>
                    <Col className='div-seach' xs='11'>
                        <div className="title-container-project">
                            <h1 className="title-project">Nosso Projeto</h1>
                        </div>
                    </Col>
                    <Col className='div-seach' xs='4'>
                        <div className="content-container" id='op'>
                            <p className="subtitle-project">Sustentare Inc</p>
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

export const Projeto = () => {
    
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Navbar backgroundColor="#231f20" iconColor="#fff"/>
                        <HeaderProject />
                        <OurProjects />
                        <Footer backgroundColor="#231f20"/>
                    </>
                }
            />
        </Routes>
    );
};

export default Projeto;