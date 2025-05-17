import React from "react";
import { Monitor, Smartphone, CheckCircle } from "lucide-react";

function Ciclo6() {
  const cursos = [
    { texto: "Desarrollo de Videojuegos para Consolas", icono: <Monitor size={32} /> },
    { texto: "Desarrollo de Videojuegos para Móviles Avanzado", icono: <Smartphone size={32} /> },
    { texto: "Testing de Videojuegos", icono: <CheckCircle size={32} /> }
  ];

  return (
    <section
      id="ciclo6"
      className="bg-white rounded-xl shadow p-6 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ciclo 6</h2>

      <div className="flex flex-row gap-6 justify-start overflow-x-auto">
        {cursos.map((curso, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl shadow min-w-[300px]"
          >
            <div className="text-indigo-600">{curso.icono}</div>
            <span className="text-gray-800">{curso.texto}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ciclo6;
