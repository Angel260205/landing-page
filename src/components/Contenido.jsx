import React from 'react';
import Buttons from './Buttons';  // Importa el nuevo componente

function MainContent() {
  return (
    <section className="main-content">
      <div className="image-container">
        <img src="img/hollow_knigt.jpg" alt="Imagen principal" />
      </div>
      <div className="text-container">
        <h1>Hollow Knight</h1>
        <p>Hollow Knight es una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz nuevas amistades con extraños insectos y resuelve los antiguos misterios que yacen en el corazón del reino.</p>
        <Buttons />  {/* Usa el componente de botones */}
      </div>
    </section>
  );
}

export default MainContent;