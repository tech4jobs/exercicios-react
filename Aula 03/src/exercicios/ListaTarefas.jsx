const ListaTarefas = () => {
  const adicionarTarefa = () => {
    const tarefa = document.getElementById("lista-tarefas");
    const listaTarefas = document.getElementById("tarefas");
    if (tarefa.value === "" || tarefa.value == null) {
      alert("Por favor, insira uma tarefa.");
      return;
    }
    const novaTarefa = document.createElement("li");
    novaTarefa.innerText = tarefa.value;
    listaTarefas.appendChild(novaTarefa);
    tarefa.value = "";
  };

  return (
    <div className="lista-tarefas">
      <h1>Lista de Tarefas</h1>
      <input type="text" placeholder="Digite a sua tarefa" id="lista-tarefas" />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>

      <ul id="tarefas"></ul>
    </div>
  );
};

export default ListaTarefas;
