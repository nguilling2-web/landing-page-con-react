import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="contenedor-tarjetas">
        
      {/* Tarjeta 1: Cumple cambio de colores y estilos */}
      <Card 
        titulo="Tarjeta Estilo" 
        descripcion="¡Mira cómo cambio de colores!" 
        tipoInteraccion="estilo" 
      />
      
      {/* Tarjeta 2: Cumple contadores básicos y mensajes dinámicos */}
      <Card 
        titulo="Tarjeta Contador" 
        descripcion="Esta tarjeta cuenta tus interacciones" 
        tipoInteraccion="contador" 
      />
      </div>
      <Footer />
    </div>
  );
}
export default App;