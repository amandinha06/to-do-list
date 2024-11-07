function adicionarTarefa() {
  const inputTarefa = document.getElementById('tarefa');
  const listaTarefas = document.getElementById('listaTarefas');

  const novaTarefa = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      novaTarefa.classList.add('concluida');
    } else {
      novaTarefa.classList.remove('concluida');
    }
  });

  novaTarefa.appendChild(checkbox); // Adiciona o checkbox primeiro
  novaTarefa.appendChild(document.createTextNode(inputTarefa.value));
  
  const botaoExcluir = document.createElement('button');
  botaoExcluir.textContent = 'X';
  botaoExcluir.classList.add('botaoExcluir');
  botaoExcluir.addEventListener('click', function() {
    listaTarefas.removeChild(novaTarefa);
  });

  novaTarefa.appendChild(botaoExcluir);
  listaTarefas.appendChild(novaTarefa);

  inputTarefa.value = '';
}