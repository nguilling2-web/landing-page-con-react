import { useState } from 'react';

function Navbar() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <>
      <nav style={{ background: '#020202', padding: '20px', color: 'white' }}>
        <h1>Mi Landing Page</h1>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
          <li>Inicio</li>
          <li 
            onClick={() => setMostrarInfo(!mostrarInfo)} 
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            Contacto
          </li>
        </ul>
      </nav>

      {/* Aquí aparece tu información al hacer clic */}
      {mostrarInfo && (
        <div style={{ padding: '20px', background: '#f4f4f4', textAlign: 'center' }}>
          <h2>Sobre Mí</h2>
          <p>Nombre: Nahin Guillin</p>
          <p>Email: nguilling2@unemi.edu.ec</p>
          <p>¡Gracias por visitar mi proyecto!</p>
        </div>
      )}
    </>
  );
}

export default Navbar;