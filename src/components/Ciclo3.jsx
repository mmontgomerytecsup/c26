import React from "react";
import { Calculator, GitMerge, Layout, Box, Cpu } from "lucide-react";

function Ciclo3() {
  const cursos = [
    { texto: "Matemática para Videojuegos", icono: <Calculator size={32} /> },
    { texto: "Algoritmos y Estructura de Datos", icono: <GitMerge size={32} /> },
    { texto: "Diseño de Videojuegos Avanzado", icono: <Layout size={32} /> },
    { texto: "Modelamiento y Animación", icono: <Box size={32} /> },
    { texto: "Desarrollo de Videojuegos con Motores (Unity)", icono: <Cpu size={32} /> }
  ];

  return (
    <section
      id="ciclo3"
      className="bg-white rounded-xl shadow p-6 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ciclo 3</h2>

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

export default Ciclo3;
