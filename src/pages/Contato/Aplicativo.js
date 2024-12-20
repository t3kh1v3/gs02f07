import './Aplicativo.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, Link } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar/Navbar.js'
import { Footer } from '../../components/Footer/Footer.js'

export const HeaderDashboard = () => {
    return (
        <div className="dashboard-header-background">
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col className='div-seach' xs='11'>
                        <div className="title-container-dashboard">
                            <h1 className="title-dashboard">Aplicativo</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const InvestorDashboardContent = () => {
    return (
    <div>
        <div className='investor-title'><h1>Gráficos destinados para <span style={{ color: '#ff9800', fontWeight: 'bold' }}>Investidores</span>
        </h1></div>
        <div className='investor-chart'>
            <div className="carbon-chart-container">
                <h2 className="carbon-chart-title">Redução de Emissões de Carbono</h2>
                <div className="carbon-chart">
                <div className="bar" style={{ height: "80%" }}>
                    <span className="bar-label">Projeto A</span>
                    <span className="bar-value">80%</span>
                </div>
                <div className="bar" style={{ height: "60%" }}>
                    <span className="bar-label">Projeto B</span>
                    <span className="bar-value">60%</span>
                </div>
                <div className="bar" style={{ height: "40%" }}>
                    <span className="bar-label">Projeto C</span>
                    <span className="bar-value">40%</span>
                </div>
                <div className="bar" style={{ height: "90%" }}>
                    <span className="bar-label">Projeto D</span>
                    <span className="bar-value">90%</span>
                </div>
                </div>
            </div>
            <div className="esg-container">
                <h2 className="esg-title">Retorno ESG</h2>
                <div className="esg-chart">
                <div className="esg-center">75% ROI</div>
                </div>
                <p className="esg-info">
                Créditos de Carbono: <strong>25 ton</strong>
                </p>
            </div>
            <div className="timeline-container">
        <h2 className="timeline-title">Progresso dos Projetos</h2>
        <div className="timeline">
            <div className="timeline-item planned">
            <div className="status-label">Planejado</div>
            <div className="progress-bar">
                <div className="progress" style={{ width: '20%' }}></div>
            </div>
            <p className="percentage">20% Executado</p>
            </div>

            <div className="timeline-item in-progress">
            <div className="status-label">Em Andamento</div>
            <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
            </div>
            <p className="percentage">60% Executado</p>
            </div>
            <div className="timeline-item completed">
            <div className="status-label">Concluído</div>
            <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
            </div>
            <p className="percentage">100% Executado</p>
            </div>
        </div>
        </div>
        </div>
    </div>
    );
  };

export const ONGsDashboardContent = () => {
    return (
<div>
    <div className='ong-title'><h1>Gráficos destinados para as <span style={{ color: '#ff9800', fontWeight: 'bold' }}>ONGs</span>
    </h1></div>
    <div className="dashboard-content-background">
        <div class="beneficiaries-container">
            <h2 class="chart-title">Crescimento de Beneficiários</h2>
            <div class="line-chart">
                <div class="line">
                    <div class="point point-2020">2020</div>
                    <div class="point point-2021">2021</div>
                    <div class="point point-2022">2022</div>
                    <div class="point point-2023">2023</div>
                    <div class="point point-2024">2024</div>
                </div>
            </div>
            <div class="demographics">
                <h3>Dados Demográficos</h3>
                <ul>
                <li>55% Mulheres</li>
                <li>45% Homens</li>
                <li>65% Comunidades Rurais</li>
                <li>35% Comunidades Urbanas</li>
                </ul>
            </div>
            </div>
            <div class="energy-credits-container">
            <h2 class="chart-title">Créditos de Energia</h2>
            <div class="credits-summary">
                <div class="credits-item">
                <span class="label">Créditos Acumulados:</span>
                <span class="value">1,250 kWh</span>
                </div>
                <div class="credits-item">
                <span class="label">Créditos Utilizados:</span>
                <span class="value">750 kWh</span>
                </div>
            </div>
            <div class="credits-simulator">
                <h3>Simulação de Trocas ou Doações</h3>
                <p>Escolha a quantidade para doar ou trocar:</p>
                <div class="credits-input">
                <input type="number" min="0" max="500" placeholder="Digite a quantidade (kWh)" />
                <button class="simulate-button">Simular</button>
                </div>
            </div>
        </div>
        <div className="impact-container">
      <h2 className="impact-title">Gestão de Impacto</h2>

      {/* Tabela de Serviços Essenciais */}
      <div className="services-table">
        <h3 className="table-title">Serviços Essenciais Oferecidos</h3>
        <table>
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Comunidades Atendidas</th>
              <th>Beneficiários</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Educação</td>
              <td>12</td>
              <td>3,500</td>
            </tr>
            <tr>
              <td>Saúde</td>
              <td>15</td>
              <td>5,200</td>
            </tr>
            <tr>
              <td>Energia</td>
              <td>8</td>
              <td>1,800</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Indicadores de Eficiência Energética */}
      <div className="efficiency-indicators">
        <h3 className="indicators-title">Indicadores de Eficiência Energética</h3>
        <div className="indicators">
          <div className="indicator">
            <p className="indicator-label">Energia Renovável</p>
            <p className="indicator-value">85%</p>
          </div>
          <div className="indicator">
            <p className="indicator-label">Redução de Emissões</p>
            <p className="indicator-value">22%</p>
          </div>
          <div className="indicator">
            <p className="indicator-label">Uso de Energia</p>
            <p className="indicator-value">78%</p>
          </div>
        </div>
      </div>
    </div>
    </div>
</div>        
    );
};

export const CommunityDashboardContent = () => {
    return (

<div>
    <div className='community-title'><h1>Gráfico destinado para a <span
        style={{color: '#ff9800', fontWeight: 'bold'}}>Comunidade</span></h1></div>
    <div className="dashboard-community-background">
        <div class="energy-container">
            <div class="indicator">
                <h2>Energia Gerada Hoje</h2>
                <div class="energy-today">250 kWh</div>
            </div>
            <div class="progress-bar-container">
                <h2>Energia Compartilhada</h2>
                <div class="progress-bar">
                <div class="progress progress-75"></div>
                </div>
                <p>75% compartilhada com outras comunidades</p>
            </div>
        </div>
    </div>
</div>

    );
};

export const Contact = () => {
    return (
    <div className='contact'>
        <h1 className="title-Contact">Entre em contato pelo nosso <a className='whatsapp-link' href='https://wa.me/11969423881'>Whatsapp</a></h1>
    </div>
    );
};

export const Aplicativo = () => {
    
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
                        <HeaderDashboard />
                        <InvestorDashboardContent />
                        <ONGsDashboardContent />
                        <CommunityDashboardContent />
                    </>
                }
            />
        </Routes>
    );
};

export default Aplicativo;