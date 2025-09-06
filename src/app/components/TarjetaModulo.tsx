import styles from './TarjetaModulo.module.css';

const TarjetaModulo = ({ nombre, descripcion, categoria, variante = 'primaria' }) => {
  // Determinar la clase de variante
  const varianteClass = {
    primaria: styles.tarjetaPrimaria,
    secundaria: styles.tarjetaSecundaria,
    exito: styles.tarjetaExito
  }[variante] || styles.tarjetaPrimaria;

  // Combinar clases
  const tarjetaClasses = `${styles.tarjeta} ${varianteClass}`;

  return (
    <div className={tarjetaClasses}>
      <div className={styles.encabezado}>
        <h3 className={styles.titulo}>{nombre}</h3>
        <span className={styles.categoria}>{categoria}</span>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
};

export default TarjetaModulo;