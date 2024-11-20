import './Vitimas.css';
import { Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react';
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'

export const HeaderVAf = () => {
    return (
    <div className="vitAff-background">
        <Container fluid>
            <Row className='justify-content-center'>
                <Col className='div-seach' xs='4'>
                    <div className="content-container" id='op'>
                        <p className="top-subtitle-vitAff">A cruel</p>
                    </div>
                </Col>
                <Col className='div-seach' xs='11'>
                    <div className="title-container-vitAff">
                        <h1 className="title-vitAff">Realidade</h1>
                    </div>
                </Col>
                <Col className='div-seach' xs='4'>
                    <div className="content-container" id='op'>
                        <p className="subtitle-vitAff">Sustentare Inc</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export const TheProblem = () => {
    return (
    <div className='theProblem'>
        <Container fluid>
            <Row className='justify-content-center align-items-center'>
                <Col xs={12} md={4} className='text-container'>
                    <h1 className="title-theProblem">O Problema</h1>
                </Col>
                <Col xs={12} md={4} className='text-container'>
                    <p className="text-theProblem">
                    A falta de acesso a energia elétrica de qualidade é uma realidade 
                    que afeta milhões de brasileiros, especialmente em comunidades carentes e 
                    regiões isoladas. Essa carência não apenas limita o desenvolvimento econômico, 
                    mas também compromete a saúde, a educação e a qualidade de vida dessas populações.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export const HeathImpact = () => {
    return (
        <div className='heathImpact'>
        <Container fluid>
            <Row className='justify-content-center align-items-center'>
                <Col xs={12} md={4} className='text-container'>
                    <h1 className="title-heathImpact">Impacto na Saúde e Educação</h1>
                    <p className="text-heathImpact">
                    A ausência de energia elétrica impede o funcionamento adequado de unidades de saúde, dificultando o armazenamento de vacinas e medicamentos que necessitam de refrigeração. Além disso, limita a realização de procedimentos médicos básicos e o uso de equipamentos essenciais. <br></br>
                    <br></br>
                    Na educação, a falta de iluminação adequada compromete o estudo noturno, restringindo as oportunidades de aprendizado para crianças e adultos. 
                    </p>
                </Col>
                <Col xs={12} md={6} className='image-container-heathImpact'>
                    <Image className='heathImpactImg' src={require('../../assets/hospital.jpg')} fluid />
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export const SocialEconomic = () => {
    return (
        <div className='socialEconomic'>
        <Container fluid>
            <Row className='justify-content-center align-items-center'>
                <Col xs={12} md={6} className='image-container-socialEconomic'>
                    <Image className='socialEconomicImg' src={require('../../assets/comunidade.jpg')} fluid />
                </Col>
                <Col xs={12} md={4} className='text-container-socialEconomic'>
                    <h1 className="title-socialEconomic">Desigualdade Social e Econômica</h1>
                    <p className="text-socialEconomic">
                    A carência energética acentua as desigualdades sociais e econômicas. Sem eletricidade, atividades produtivas ficam restritas, limitando a geração de renda e o desenvolvimento local. Comunidades sem acesso à energia elétrica enfrentam desafios adicionais para se integrarem à economia formal e melhorarem suas condições de vida. <br></br>
                    <br></br>
                    A falta de energia elétrica de qualidade afeta milhões de pessoas, limitando o acesso à saúde, educação e oportunidades de trabalho. Pequenos negócios não conseguem operar, escolas ficam sem tecnologia básica e postos de saúde não funcionam plenamente. Além disso, a exclusão digital isola comunidades de soluções e conexões essenciais. Na Amazônia, mais de 425 mil famílias vivem sem energia, enfrentando ciclos de pobreza e exclusão.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export const DataAbout = () => {
    return (
        <div className='DataAbout'>
        <Container fluid>
            <Row className='justify-content-center align-items-center'>
                <div className='gambiarra'>
                    <h1 className='title-Data'>Dados a respeito do tema</h1>
                </div>
                <Col xs={12} md={4} className='text-container-DataAbout'>
                    <div className='DataDiv'>
                        <h1 className='Data-title-one'>
                            População Sem Acesso à Energia
                        </h1>
                        <p className='Data-paragraf-one'>
                             Aproximadamente 733 milhões de pessoas no mundo não possuíam acesso à eletricidade, sendo que 2,4 bilhões ainda utilizavam combustíveis prejudiciais à saúde e ao meio ambiente para cozinhar.
                        </p>
                        <div className='button-Data'>
                            <Button variant="outline-dark" className="Data-button" onClick={() => window.open('https://brasil.un.org/pt-br/184580-relatório-estima-que-8-da-população-não-terá-acesso-à-energia-em-2030', '_blank')}>Saiba Mais</Button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className='text-container-DataAbout'>
                    <div className='DataDiv'>
                        <h1 className='Data-title-two'>
                            Comunidades na Amazônia
                        </h1>
                        <p className='Data-paragraf-two'>
                            Estima-se que mais de 425 mil famílias na Amazônia brasileira ainda vivem sem energia elétrica, enfrentando desafios diários que comprometem seu desenvolvimento e bem-estar.
                        </p>
                        <div className='button-Data'>
                            <Button variant="outline-dark" className="Data-button" onClick={() => window.open('https://oeco.org.br/reportagens/amazonia-tem-mais-425-mil-familias-sem-energia-eletrica/', '_blank')}
                            >Saiba Mais</Button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className='text-container-DataAbout'>
                    <div className='DataDiv'>
                        <h1 className='Data-title-three'>
                            Impacto Econômico
                        </h1>
                        <p className='Data-paragraf-three'>
                            A falta de acesso à energia elétrica limita a capacidade produtiva e econômica dessas comunidades, perpetuando ciclos de pobreza e desigualdade.
                        </p>
                        <div className='button-Data'>
                            <Button variant="outline-dark" className="Data-button" onClick={() => window.open('https://idec.org.br/dicas-e-direitos/pobreza-energetica', '_blank')}>Saiba Mais</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export const TheSolution = () => {
    return (
    <div className='theSolution'>
        <Container fluid>
            <Row className='justify-content-center align-items-center'>
                <Col xs={12} md={4} className='text-container'>
                    <h1 className="title-theSolution">Conheça a Solução</h1>
                    <div className='button-theSolution'>
                        <Button as={ Link } to="/Social" variant="outline-dark" className="theSolution-button">Saiba Mais</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export const Vitimas = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                    <Navbar backgroundColor="#231f20" iconColor="#000"/>
                        <HeaderVAf />
                        <TheProblem />
                        <HeathImpact />
                        <SocialEconomic />
                        <DataAbout />
                        <TheSolution />
                    <Footer backgroundColor="#231f20"/>
                    </>
                }
            />
        </Routes>
    );
};