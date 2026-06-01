import { useState } from 'react';

function Card({ titulo, descripcion, tipoInteraccion }) {
  const [estado, setEstado] = useState(false);
  const [contador, setContador] = useState(0);
  const [estilo, setEstilo] = useState({ backgroundColor: '#ffffff', color: '#000000' });

  // Opción 1: Cambio de color y estilo (Para la tarjeta 1)
  const cambiarEstilo = () => {
    setEstilo({ backgroundColor: '#333', color: '#fff' });
  };

  // Opción 2: Contador y texto dinámico (Para la tarjeta 2)
  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="tarjeta" style={estilo}>
      <h3>{titulo}</h3>
      <p>{estado ? descripcion : "Información oculta"}</p>
      
      {/* Lógica condicional simple para los botones */}
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