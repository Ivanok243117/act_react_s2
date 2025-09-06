const TarjetaTailwind = ({ titulo, descripcion, imagen, etiqueta }) => {
  return (
    <div className="flex flex-col w-64 p-6 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1">
      {imagen && (
        <img 
          src={imagen} 
          alt={titulo} 
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}
      
      {etiqueta && (
        <span className={`self-start text-xs font-medium px-2.5 py-0.5 rounded mb-3 ${
          etiqueta === "Popular" 
            ? "bg-blue-100 text-blue-800 border border-blue-200" 
            : "bg-green-100 text-green-800 border border-green-200"
        }`}>
          {etiqueta}
        </span>
      )}
      
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{titulo}</h3>
      <p className="text-gray-600 text-sm leading-6">{descripcion}</p>
    </div>
  );
};

export default TarjetaTailwind;