const TarjetaDinamica = ({ 
  titulo, 
  contenido, 
  colorFondo = '#ffffff', 
  colorTexto = '#000000', 
  ancho = '100%',
  activo = false 
}) => {
  // Estilos base
  const estiloBase = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: '1.5rem',
    margin: '0.5rem 0',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    transition: 'all 0.3s ease'
  };

  // Estilos cuando está activo
  const estiloActivo = activo ? {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.02)',
    borderColor: '#3498db'
  } : {};

  // Combinar estilos
  const estilosCombinados = { ...estiloBase, ...estiloActivo };

  return (
    <div style={estilosCombinados}>
      <h2 style={{ 
        margin: '0 0 0.5rem 0', 
        fontSize: '1.5rem',
        borderBottom: activo ? `2px solid ${colorTexto}` : 'none',
        paddingBottom: activo ? '0.25rem' : '0'
      }}>
        {titulo}
      </h2>
      <p style={{ margin: 0, lineHeight: '1.6' }}>{contenido}</p>
    </div>
  );
};

export default TarjetaDinamica;