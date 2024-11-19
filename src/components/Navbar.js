import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Offcanvas } from 'react-bootstrap';



export const Navbar = ({ backgroundColor = "#fff", iconColor = "#000" }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Botão Sanduíche com Font Awesome */}
      <button
        className="hamburger-button"
        onClick={handleShow}
        aria-label="Abrir Menu"
        style={{ color: iconColor }}
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" size="2x" />
      </button>

      <Offcanvas 
      show={show} 
      onHide={handleClose} 
      placement="end" 
      className="minimal-popup"
      style={{ backgroundColor }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="menu-list">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/Sobre">Sobre Nós</a>
            </li>
            <li>
              <a href="/Problema">O Problema</a>
            </li>
            <li>
              <a href="/Projeto">A Solução</a>
            </li>
            <li>
              <a href="/Contato">Contribua</a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;