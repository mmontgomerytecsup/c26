import React from "react";
import { Gamepad2, PenTool, Puzzle } from "lucide-react";

function Ciclo1() {
  const cursos = [
    {
      texto: "Fundamentos de Programación para Videojuegos (Fundamentos en C#)",
      icono: <Gamepad2 size={32} />
    },
    {
      texto: "Taller de Diseño y Desarrollo de Videojuegos (Construct 3)",
      icono: <PenTool size={32} />
    },
    {
      texto: "Introducción al Diseño y Desarrollo de Juegos (Juegos de mesa)",
      icono: <Puzzle size={32} />
    }
  ];

  return (
    <section
      id="ciclo1"
      className="bg-white rounded-xl shadow p-6 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ciclo 1</h2>

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

export default Ciclo1;


