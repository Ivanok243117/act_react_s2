const TarjetaGlobal = ({ titulo, contenido, color }) => {
  const cardStyle = {
    borderLeft: `4px solid ${color || '#3498db'}`,
    borderTop: `1px solid ${color || '#e0e0e0'}30`,
    borderRight: `1px solid ${color || '#e0e0e0'}30`,
    borderBottom: `1px solid ${color || '#e0e0e0'}30`,
    backgroundColor: `${color || '#3498db'}33`, // Fondo con 33%
  };

  return (
    <div className="tarjeta-global" style={cardStyle}>
      <h2 className="titulo-global" style={{ color: color || '#3498db' }}>
        {titulo}
      </h2>
      <p className="contenido-global">{contenido}</p>
    </div>
  );
};

export default TarjetaGlobal;