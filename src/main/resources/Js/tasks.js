document.addEventListener("DOMContentLoaded", function () {
  const formTarefa = document.getElementById("form-tarefa");
  const listaTarefas = document.getElementById("lista-tarefas");
  const formEdicao = document.getElementById("form-edicao");
  const formEdicaoTarefa = document.getElementById("form-edicao-tarefa");
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

      // Adicionando evento de clique para os botões de edição
      const botoesEditar = document.querySelectorAll(".btn-editar");
      botoesEditar.forEach(function (botao) {
          botao.addEventListener("click", function (event) {
              const id = event.target.getAttribute("data-id");
              exibirFormularioEdicao(id); // Passa o ID para a função de exibição do formulário de edição
          });
      });
  }

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

  function exibirFormularioEdicao(id) {
      const tarefaSelecionada = tarefas.find((tarefa) => tarefa.id === parseInt(id));
      if (tarefaSelecionada) {
          document.getElementById("edicao-id").value = tarefaSelecionada.id;
          document.getElementById("edicao-descricao").value = tarefaSelecionada.descricao;
          document.getElementById("edicao-prioridade").value = tarefaSelecionada.prioridade;
          formEdicao.style.display = "block";
      }
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
      const id = document.getElementById("edicao-id").value;
      const descricao = document.getElementById("edicao-descricao").value;
      const prioridade = document.getElementById("edicao-prioridade").value;
      if (descricao.trim() !== "") {
          editarTarefa(id, descricao, prioridade);
          formEdicao.style.display = "none"; 
      } else {
          alert("Por favor, insira uma descrição para a tarefa.");
      }
  });
});
