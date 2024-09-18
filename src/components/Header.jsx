import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Contáctanos</a></li>
          <li><a href="#">Personajes</a></li>
          <li><a href="#">Regístrate</a></li>
          <li><a href="#">Cuenta</a></li>
          <li><a href="#">Creadores</a></li>
        </ul>
        <div className="theme-toggle">
          <input type="checkbox" id="dark-mode-toggle" />
          <label htmlFor="dark-mode-toggle"></label>
        </div>
      </nav>
    </header>
  );
}

export default Header;