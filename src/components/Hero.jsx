import { useState } from 'react';

function Hero() {
  const [mensaje, setMensaje] = useState("¡Bienvenido a mi Landing Page!");
  const [colorFondo, setColorFondo] = useState("#f4f4f4");

  const transformarHero = () => {
    setMensaje("¡La interactividad en React es increíble!");
    setColorFondo("#333"); // Cambia el fondo a oscuro
  };

  return (
    <section style={{ 
      padding: '80px 20px', 
      textAlign: 'center', 
      backgroundColor: colorFondo,
      color: colorFondo === "#282626" ? "white" : "black",
      transition: "0.5s"
    }}>
      <h1>{mensaje}</h1>
      <p>Este es el componente principal donde demuestro la potencia de React.</p>
      
      <button 
        onClick={transformarHero}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Transformar Sitio
      </button>
    </section>
  );
}

export default Hero;