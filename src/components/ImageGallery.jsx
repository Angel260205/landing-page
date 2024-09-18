import React from 'react';

function ImageGallery() {
  return (
    <section className="image-gallery">
      <div>
        <img src="img/zote.png" alt="Zote" />
        <p>Zote es un personaje testarudo y presuntuoso que tiene su propia percepción exagerada de sus habilidades.</p>
      </div>
      <div>
        <img src="img/quirrel.png" alt="Quirrel" />
        <p>Quirrel es un viajero amable y curioso que ayuda al Caballero en su aventura, aunque tiene un pasado misterioso.</p>
      </div>
      <div>
        <img src="img/caballero.png" alt="Caballero" />
        <p>El Caballero es el protagonista silencioso de la historia, que explora Hallownest para descubrir su destino.</p>
      </div>
      <div>
        <img src="img/hornet.png" alt="Hornet" />
        <p>Hornet es una hábil guerrera que guarda secretos sobre el pasado del Caballero y su relación con Hallownest.</p>
      </div>
      <div>
        <img src="img/ciervo.png" alt="Ciervo" />
        <p>El Ciervo es una de las últimas criaturas de su especie, ayudando al Caballero a viajar rápidamente por el reino.</p>
      </div>
    </section>
  );
}

export default ImageGallery;