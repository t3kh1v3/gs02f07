import './Projeto.css';
import {Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {Navbar} from '../../components/Navbar/Navbar.js'
import {Footer} from '../../components/Footer/Footer.js'

export const HeaderProject = () => {
    return (<div className="project-background">
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
    </div>);
};

export const OurProjects = () => {
    return (<>
            <div className='our-project'>
                <Container fluid>
                    <Row className='justify-content-center align-items-center'>
                        <Col xs={12} md={4} className='text-container'>
                            <h1 className="title-OurProjects">População Sem Acesso à Energia</h1>
                            <p className="text-OurProjects">
                                Aproximadamente 733 milhões de pessoas no mundo não possuíam acesso à eletricidade,
                                sendo
                                que 2,4 bilhões ainda utilizavam combustíveis prejudiciais à saúde e ao meio ambiente
                                para
                                cozinhar. </p>
                            <p className="text-OurProjects">
                                A falta de acesso à eletricidade afeta diretamente a qualidade de vida, limitando o
                                desenvolvimento econômico, a educação e os cuidados com a saúde em muitas regiões do
                                mundo.
                                Para grande parte da população que ainda depende de combustíveis como lenha, carvão ou
                                esterco para cozinhar, os impactos vão além da emissão de poluentes: são milhares de
                                mortes
                                anuais causadas por doenças respiratórias devido à inalação contínua de fumaça em
                                ambientes
                                fechados. Além disso, o uso desses recursos contribui para o desmatamento e a degradação
                                ambiental, criando um ciclo de pobreza e vulnerabilidade climática que perpetua a
                                desigualdade. </p>

                            <p className="text-OurProjects">A <span
                                style={{color: '#ff9800', fontWeight: 'bold'}}>Sustentare</span> promove a
                                democratização da
                                energia elétrica por meio de iniciativas como a energia solar em comunidades remotas,
                                oferecendo uma solução sustentável. Ao levar eletricidade de forma acessível e limpa,
                                podemos transformar vidas, abrir portas para novas oportunidades e garantir um futuro
                                mais
                                justo e saudável para todos. "Onde chega a energia, chega o progresso."</p>
                        </Col>
                        <Col xs={12} md={6} className='image-container'>
                            <Image className='ProjectImg' src={require('../../assets/noElectricity1.jpg')} fluid/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='our-project2'>
                <Container fluid>
                    <Row className='justify-content-center align-items-center'>
                        <Col xs={12} md={4} className='text-container'>
                            <h1 className="title-OurProjects">Comunidades na Amazônia</h1>
                            <p className="text-OurProjects">
                                Estima-se que mais de 425 mil famílias na Amazônia brasileira ainda vivem sem energia
                                elétrica, enfrentando desafios diários que comprometem seu desenvolvimento e
                                bem-estar. </p>
                            <p className="text-OurProjects">
                                A ausência de energia elétrica em mais de 425 mil famílias na Amazônia brasileira é um
                                reflexo da desigualdade no acesso a recursos essenciais para a qualidade de vida e o
                                progresso social. Sem eletricidade, essas comunidades enfrentam limitações graves na
                                educação, na saúde e na geração de renda, além de ficarem isoladas de muitas
                                oportunidades de desenvolvimento. A falta de iluminação afeta diretamente a rotina das
                                famílias, enquanto a ausência de refrigeração para alimentos e medicamentos compromete o
                                bem-estar e a segurança alimentar. Além disso, a dependência de combustíveis fósseis ou
                                lenha para atividades básicas, como cozinhar, intensifica os impactos negativos no meio
                                ambiente e na saúde pública. </p>

                            <p className="text-OurProjects">A <span
                                style={{color: '#ff9800', fontWeight: 'bold'}}>Sustentare</span> promove iniciativas que
                                levam energia limpa e acessível às comunidades da Amazônia, como projetos de energia
                                solar adaptados às necessidades locais. Essa abordagem não apenas transforma vidas ao
                                oferecer melhores condições de moradia e trabalho, mas também protege o meio ambiente ao
                                incentivar práticas sustentáveis.</p>
                        </Col>
                        <Col xs={12} md={6} className='image-container'>
                            <Image className='ProjectImg' src={require('../../assets/amazonia1.jpg')} fluid/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='our-project'>
                <Container fluid>
                    <Row className='justify-content-center align-items-center'>
                        <Col xs={12} md={4} className='text-container'>
                            <h1 className="title-OurProjects">Impacto Econômico</h1>
                            <p className="text-OurProjects">
                                A ausência de energia elétrica limita profundamente as possibilidades de crescimento
                                econômico nas comunidades afetadas, restringindo o acesso a ferramentas e infraestrutura
                                essenciais para atividades produtivas. Sem eletricidade, pequenos produtores enfrentam
                                desafios no armazenamento de alimentos, pescados e outros produtos, comprometendo sua
                                comercialização. Além disso, a falta de energia impede a mecanização de processos
                                agrícolas e industriais, o que reduz a competitividade e a geração de renda. O acesso à
                                energia é um fator essencial para criar condições que permitam o desenvolvimento
                                econômico sustentável, mas a sua ausência perpetua o isolamento e reforça as
                                desigualdades sociais. </p>

                            <p className="text-OurProjects">A <span
                                style={{color: '#ff9800', fontWeight: 'bold'}}>Sustentare</span> atua para transformar essa realidade, levando energia renovável e soluções acessíveis a regiões onde o potencial produtivo está sufocado pela falta de infraestrutura básica. Ao impulsionar atividades econômicas locais e abrir novas perspectivas para as famílias, a Sustentare mostra que a energia é mais do que uma necessidade – é uma ponte para a autonomia e o progresso. "Onde há energia, há força para prosperar."</p>
                        </Col>
                        <Col xs={12} md={6} className='image-container'>
                            <Image className='ProjectImg' src={require('../../assets/solarpark.jpg')} fluid/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    );
};

export const Projeto = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<Routes>
        <Route
            path="/"
            element={<>
                <Navbar backgroundColor="#231f20" iconColor="#fff"/>
                <HeaderProject/>
                <OurProjects/>
                <Footer backgroundColor="#231f20"/>
            </>}
        />
    </Routes>);
};

export default Projeto;