import './Sobre.css';
import { useEffect } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar.js'
import { Footer } from '../../components/Footer.js'

export const HeaderSobre = () => {
    return (
        <div className="Sobre-background">
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col className='div-seach' xs='4'>
                        <div className="content-container" id='op'>
                            <p className="top-subtitle-about">Conheça</p>
                        </div>
                    </Col>
                    <Col className='div-seach' xs='11'>
                        <div className="title-container-about">
                            <h1 className="title-about">Nossa História</h1>
                        </div>
                    </Col>
                    <Col className='div-seach' xs='4'>
                        <div className="content-container" id='op'>
                            <p className="subtitle-about">Sustentare Inc</p>
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
                    <Col xs={12} md={6} className='image-container-aboutUs'>
                        <Image className='aboutUsImg' src={require('../../assets/cabos1.jpg')} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export const VictimsAffected = () => {
    return (
        <div className='victimsAffected'>
            <Container fluid>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12} md={6} className='image-container-victimsAffected'>
                        <Image className='victimsAffectedImg' src={require('../../assets/barco.jpg')} fluid />
                    </Col>
                    <Col xs={12} md={4} className='text-container'>
                        <h1 className="title-victimsAffected">Uma Realidade Invisível</h1>
                        <p className="text-victimsAffected">
                            Em regiões isoladas do Brasil e de outros países em desenvolvimento, 
                            a falta de acesso à <span style={{ color: '#ff9800', fontWeight: 'bold' }}>energia sustentável</span> não é apenas um desafio econômico, 
                            mas também um problema social profundo. Milhares de famílias enfrentam dificuldades diárias, 
                            dependendo de fontes de energia caras, poluentes e perigosas 
                            para manter o básico: iluminação, comunicação e conforto.
                        </p>
                        <p className="text-victimsAffected">
                        Enquanto muitos de nós consideram a eletricidade algo garantido, 
                        comunidades inteiras vivem na escuridão ou em condições precárias, 
                        sacrificando qualidade de vida e oportunidades por falta de infraestrutura básica. <br></br><br></br>
                        A <span style={{ color: '#ff9800', fontWeight: 'bold' }}>Sustentare</span> surgiu para mudar essa realidade, conectando soluções acessíveis 
                        e inovadoras às comunidades que mais precisam. Nossa missão é levar dignidade 
                        e esperança a essas famílias, promovendo transformação social por meio da energia limpa.
                        </p>
                        <div className='button-vAff'>
                            <Button as={ Link } to="/Social" variant="outline-dark" className="vAff-button">Saiba Mais</Button>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export const AboutProject = () => {
    return (
        <div className='aboutProject'>
        <Container fluid>
            <Row className='justify-content-center align-items-center'>
                <Col xs={12} md={4} className='text-container'>
                    <h1 className="title-aboutProject">Um Propósito em Movimento</h1>
                    <p className="text-aboutProject">
                        A <span style={{ color: '#ff9800', fontWeight: 'bold' }}>Sustentare</span> nasceu com um propósito claro: transformar vidas por meio da energia sustentável. 
                        Nosso projeto conecta investidores comprometidos com impacto social às ONGs que atuam em comunidades necessitadas, 
                        criando uma ponte entre quem pode contribuir e quem mais precisa de apoio.
                    </p>
                    <p className="text-aboutProject">
                    Nossa plataforma é mais do que uma ferramenta; é um espaço de colaboração, 
                    onde recursos financeiros e ideias inovadoras se encontram para levar energia limpa e renovável a 
                    lugares esquecidos. Juntos, acreditamos que podemos promover um impacto positivo duradouro, reduzindo desigualdades 
                    e criando oportunidades para milhares de famílias. <br></br> <br></br>
                    Ao unir empresas e indivíduos que compartilham o mesmo propósito, 
                    iremos construir um futuro mais justo e sustentável, onde cada investimento 
                    é um passo em direção a um mundo melhor. Seja parte dessa transformação. 
                    Vamos juntos iluminar vidas e mudar histórias!
                    </p>
                    <div className='button-aProj'>
                        <Button as={ Link } to="/Projeto" variant="outline-dark" className="aProj-button">Saiba Mais</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} className='image-container-aboutProject'>
                    <Image className='aboutProjectImg' src={require('../../assets/acaosocial.jpg')} fluid />
                </Col>
            </Row>
        </Container>
    </div>
    )
}



export const Sobre = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    return ( 
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Navbar backgroundColor="#231f20" iconColor="#fff" />
                        <HeaderSobre />
                        <AboutUs />
                        <VictimsAffected />
                        <AboutProject />
                        <Footer backgroundColor="#fff" iconColor="#fff"/>
                    </>
                }
            />
        </Routes>
    );
};

export default Sobre;

