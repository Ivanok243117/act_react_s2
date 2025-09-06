import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaTailwind from './components/TarjetaTailwind';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Comparación de Métodos de Estilizado</h1>
      
      {/* Sección CSS Global */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">1. CSS Global</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TarjetaGlobal 
            titulo="Tarjeta con CSS Global" 
            contenido="Este componente utiliza clases CSS globales definidas en el archivo globals.css. Los estilos se aplican mediante clases reutilizables."
            color="#3498db"
          />
          <TarjetaGlobal 
            titulo="Ventajas del CSS Global" 
            contenido="Fácil de implementar, consistencia en toda la aplicación, y buen rendimiento para proyectos pequeños."
            color="#2ecc71"
          />
        </div>
      </section>
      
      {/* Sección Módulos CSS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">2. Módulos CSS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TarjetaModulo 
            nombre="Tarjeta Primaria"
            descripcion="Esta tarjeta utiliza módulos CSS con variante primaria. Los estilos están encapsulados y no afectan otros componentes."
            categoria="Módulos CSS"
            variante="primaria"
          />
          <TarjetaModulo 
            nombre="Tarjeta Secundaria"
            descripcion="Variante secundaria del mismo componente. Muestra cómo podemos tener múltiples estilos para el mismo componente."
            categoria="Módulos CSS"
            variante="secundaria"
          />
          <TarjetaModulo 
            nombre="Tarjeta Éxito"
            descripcion="Variante de éxito que demuestra la flexibilidad de los módulos CSS para crear diferentes estilos."
            categoria="Módulos CSS"
            variante="exito"
          />
        </div>
      </section>
      
      {/* Sección Estilos en Línea */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">3. Estilos en Línea</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TarjetaDinamica 
            titulo="Tarjeta Dinámica" 
            contenido="Este componente utiliza estilos en línea que se pasan como props. Perfecto para estilos completamente dinámicos."
            colorFondo="#f8f9fa"
            colorTexto="#343a40"
            ancho="100%"
            activo={true}
          />
          <TarjetaDinamica 
            titulo="Otra Tarjeta Dinámica" 
            contenido="Los estilos en línea son útiles cuando necesitas máxima flexibilidad, pero pueden afectar el rendimiento si se usan en exceso."
            colorFondo="#e3f2fd"
            colorTexto="#0d47a1"
            ancho="100%"
            activo={false}
          />
        </div>
      </section>
      
      {/* Sección Tailwind CSS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">4. Tailwind CSS</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <TarjetaTailwind 
            titulo="Tarjeta con Tailwind" 
            descripcion="Este componente utiliza clases de Tailwind CSS para todos sus estilos. Ofrece un diseño consistente y responsive."
            etiqueta="Popular"
          />
          <TarjetaTailwind 
            titulo="Ventajas de Tailwind" 
            descripcion="Tailwind permite crear interfaces rápidamente sin salir de tu HTML/JSX. Es altamente personalizable."
            imagen="https://infynno.com/wp-content/uploads/2022/10/react-components-using-tailwind-css.png"
            etiqueta="Moderno"
          />
        </div>
      </section>
    </div>
  );
}
