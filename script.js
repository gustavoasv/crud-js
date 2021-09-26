const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelector(".new-user");
const modalArea = document.querySelector(".modal-area");

closeModal.addEventListener("click", () => {
  modalArea.style.display = "none";
});

openModal.addEventListener("click", () => {
  modalArea.style.display = "flex";
});

document.querySelector(".btn-save").addEventListener("click", criaCliente);

const inputName = document.querySelector(".input-name");
const inputEmail = document.querySelector(".input-email");
const inputCidade = document.querySelector(".input-cidade");
const inputTel = document.querySelector(".input-tel");

function criaCliente() {
  const table = document.createElement("tr");

  table.innerHTML = `

    <td>${inputName.value}</td>
    <td>${inputEmail.value}</td>
    <td>${inputCidade.value}</td>
    <td>${inputTel.value}</td>
    <button type="button" class="button blue">editar</button>
    <button type="button" class="button red">excluir</button>
    
    `;
  modalArea.style.display = "none";
  document.querySelector("tbody").appendChild(table);
  limpaFormulario();
}

const limpaFormulario = () => {
  let inputGeral = document.querySelectorAll("input");

  for (let inputGerais of inputGeral) {
    inputGerais.value = "";
  }
};
