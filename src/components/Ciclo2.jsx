import React from "react";
import { Code, Database, Layout, PenTool } from "lucide-react";

function Ciclo2() {
  const cursos = [
    { texto: "Programación Aplicada a Videojuegos", icono: <Code size={32} /> },
    { texto: "Base de Datos", icono: <Database size={32} /> },
    { texto: "Diseño de Videojuegos", icono: <Layout size={32} /> },
    { texto: "Dibujo Digital", icono: <PenTool size={32} /> }
  ];

  return (
    <section
      id="ciclo2"
      className="bg-white rounded-xl shadow p-6 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ciclo 2</h2>

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

export default Ciclo2;
