document.addEventListener("DOMContentLoaded", function () {
  const formTarefa = document.getElementById("form-tarefa");
  const listaTarefas = document.getElementById("lista-tarefas");
  const formEdicao = document.getElementById("form-edicao");
  const formEdicaoTarefa = document.getElementById("form-edicao-tarefa");
  const edicaoIdInput = document.getElementById("edicao-id");
  const edicaoDescricaoInput = document.getElementById("edicao-descricao");
  const edicaoPrioridadeSelect = document.getElementById("edicao-prioridade");
  const tarefas = [];

  function renderizarTarefas() {
    listaTarefas.innerHTML = "";

    tarefas.forEach(function (tarefa) {
      const itemTarefa = document.createElement("div");
      itemTarefa.classList.add("tarefa");
      itemTarefa.innerHTML = `
                <input type="checkbox" id="tarefa-${tarefa.id}">
                <label for="tarefa-${tarefa.id}">${tarefa.descricao} - ${tarefa.prioridade}</label>
                <button class="btn btn-secondary btn-editar" data-id="${tarefa.id}">Editar</button>
            `;
      listaTarefas.appendChild(itemTarefa);
    });

    const botoesEditar = document.querySelectorAll(".btn-editar");
    botoesEditar.forEach(function (botao) {
      botao.addEventListener("click", function (event) {
        const id = event.target.getAttribute("data-id");
        const tarefaSelecionada = tarefas.find(
          (tarefa) => tarefa.id === parseInt(id)
        );
        if (tarefaSelecionada) {
          edicaoIdInput.value = tarefaSelecionada.id;
          edicaoDescricaoInput.value = tarefaSelecionada.descricao;
          edicaoPrioridadeSelect.value = tarefaSelecionada.prioridade;
          formEdicao.style.display = "block";
        }
      });
    });
  }

  formTarefa.addEventListener("submit", function (event) {
    event.preventDefault();
    const descricao = document.getElementById("descricao").value;
    const prioridade = document.getElementById("prioridade").value;
    if (descricao.trim() !== "") {
      adicionarTarefa(descricao, prioridade);
      document.getElementById("descricao").value = "";
    } else {
      alert("Por favor, insira uma descrição para a tarefa.");
    }
  });

  formEdicaoTarefa.addEventListener("submit", function (event) {
    event.preventDefault();
    const id = edicaoIdInput.value;
    const descricao = edicaoDescricaoInput.value;
    const prioridade = edicaoPrioridadeSelect.value;
    if (descricao.trim() !== "") {
      editarTarefa(id, descricao, prioridade);
      formEdicao.style.display = "none";
    } else {
      alert("Por favor, insira uma descrição para a tarefa.");
    }
  });

  function adicionarTarefa(descricao, prioridade) {
    const novaTarefa = {
      id: Date.now(),
      descricao: descricao,
      prioridade: prioridade,
    };
    tarefas.push(novaTarefa);
    renderizarTarefas();
  }

  function editarTarefa(id, descricao, prioridade) {
    const index = tarefas.findIndex((tarefa) => tarefa.id === parseInt(id));
    if (index !== -1) {
      tarefas[index].descricao = descricao;
      tarefas[index].prioridade = prioridade;
      renderizarTarefas();
    }
  }
});
