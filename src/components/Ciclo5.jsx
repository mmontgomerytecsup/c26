import React from "react";
import { Cpu, Gamepad, Smartphone, WandSparkles } from "lucide-react";

function Ciclo5() {
  const cursos = [
    { texto: "Inteligencia Artificial", icono: <Cpu size={32} /> },
    { texto: "Desarrollo de Serious Games", icono: <Gamepad size={32} /> },
    { texto: "Desarrollo de Videojuegos para Móviles", icono: <Smartphone size={32} /> },
    { texto: "Taller de Prototipos", icono: <WandSparkles size={32} /> }
  ];

  return (
    <section
      id="ciclo5"
      className="bg-white rounded-xl shadow p-6 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ciclo 5</h2>

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

export default Ciclo5;
