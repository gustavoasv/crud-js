const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  clearFields();
  document.getElementById("modal").classList.remove("active");
};

// const tempClient = {
//   nome: "Julia",
//   email: "example@gmail.com",
//   celular: "123459876",
//   cidade: "Imperatriz",
// };

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));
// CRUd - Creat read update delete

const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

const readClient = () => getLocalStorage();

const DeleteClient = (index) => {
  const dbClient = getLocalStorage();
  dbClient.slice(index, 1);
  setLocalStorage(dbClient);
};

// CRUD - CREATE
const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

const isValidFilds = () => {
  return document.getElementById("form").reportValidity();
};

// interção com layout

const clearFields = () => {
  const fields = document.querySelectorAll('.modal-field')
  fields.forEach(field => field.value = "")
};

const saveClient = () => {
  if (isValidFilds()) {
    const client = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
      cidade: document.getElementById("cidade").value,
    };
    createClient(client);
    closeModal();
  }
};

const clearTable = () =>{
   const rows = document.querySelectorAll('#tbCliente>tbody tr')

   rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
  const dbClient = getLocalStorage();
  clearTable()
  dbClient.forEach(createRow);
};

const createRow = (client) => {
  const meuRow = document.createElement("tr");

  meuRow.innerHTML = `
   
  <td>${client.nome}</td>
    <td>${client.email}</td>
    <td>${client.celular}</td>
    <td>${client.cidade}</td>
    <button type="button" class="button green">editar</button>
    <button type="button" class="button red">excluir</button>
  `;

  document.querySelector('#tbCliente>tbody').appendChild(meuRow)

};

updateTable();

// Eventos
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("salvar").addEventListener("click", saveClient);
