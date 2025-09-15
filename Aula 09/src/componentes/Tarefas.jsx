import React, { useEffect, useState } from "react";

export const Tarefas = () => {
  const [tarefas, setTarefas] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTarefas(data.slice(0, 10)))
      .catch((error) => console.error("Erro ao buscar tarefas:", error));
  }, []);

  if (!tarefas) {
    return <div>Carregando tarefas...</div>;
  }

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.title} {tarefa.completed ? "(Concluída)" : "(Pendente)"}
          </li>
        ))}
      </ul>
    </div>
  );
};