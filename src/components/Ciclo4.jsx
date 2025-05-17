import React from "react";
import { Cloud, Monitor, Cpu, Layers, Box } from "lucide-react";

function Ciclo4() {
  const cursos = [
    {
      texto: "Desarrollo de Videojuegos en Soluciones Cloud",
      icono: <Cloud size={32} />
    },
    {
      texto: "Gráficos por Computadora",
      icono: <Monitor size={32} />
    },
    {
      texto: "Electrónica Digital",
      icono: <Cpu size={32} />
    },
    {
      texto: "Desarrollo de Videojuegos con Motores Avanzado",
      icono: <Layers size={32} />
    },
    {
      texto: "Modelamiento y Animación Avanzado",
      icono: <Box size={32} />
    }
  ];

  return (
    <section
      id="ciclo4"
      className="bg-white rounded-xl shadow p-6 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ciclo 4</h2>

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

export default Ciclo4;
