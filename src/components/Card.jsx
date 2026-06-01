import { useState } from 'react';

function Card({ titulo, descripcion, tipoInteraccion }) {
  const [estado, setEstado] = useState(false);
  const [contador, setContador] = useState(0);
  const [estilo, setEstilo] = useState({ backgroundColor: '#ffffff', color: '#000000' });

  
  const cambiarEstilo = () => {
    setEstilo({ backgroundColor: '#333', color: '#fff' });
  };

  
  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="tarjeta" style={estilo}>
      <h3>{titulo}</h3>
      <p>{estado ? descripcion : "Información oculta"}</p>
      
     
      {tipoInteraccion === "estilo" ? (
        <button onClick={cambiarEstilo}>Cambiar Estilo</button>
      ) : (
        <button onClick={incrementar}>Clicks: {contador}</button>
      )}

      <button onClick={() => setEstado(!estado)}>
        {estado ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}

export default Card;
