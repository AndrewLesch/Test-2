const addPeopleForm = document.getElementById('add-people-form');
const peopleListDiv = document.getElementById("people-list-div");
const people = [];

function renderPeople(newPerson) {
  let peopleList = document.getElementById('peopleList');
  if (peopleList === null) {
    createTable();
  };
  peopleList = document.getElementById('peopleList');
  createTd(newPerson);
  console.log(people);
}

function createTable() {
  const table = document.createElement("table");
    peopleListDiv.append(table);
    table.setAttribute('id','peopleList');
    table.classList.add("tableList");
    const tr = document.createElement("tr");
    const tableFirstName = document.createElement("td");
    const tableLastName = document.createElement("td");
    const tableDateOfBirth = document.createElement("td");
    const tableWeight = document.createElement("td");
    tableFirstName.textContent = "Имя";
    tableLastName.textContent = "Фамилия";
    tableDateOfBirth.textContent = "Дата рождения";
    tableWeight.textContent = "Вес";
    appendChilds(tableFirstName,tableLastName,tableDateOfBirth,tableWeight);
}


function createTd(newPerson){
  const personFirstName = document.createElement("td");
  const personLastName = document.createElement("td");
  const personDateOfBirth = document.createElement("td");
  const personWeight = document.createElement("td");
  fillTextContent(newPerson,personFirstName,personLastName,personDateOfBirth,personWeight);
  appendChilds(personFirstName,personLastName,personDateOfBirth,personWeight);
}

function appendChilds(personFirstName,personLastName,personDateOfBirth,personWeight) {
  const tr = document.createElement("tr");
  peopleList.append(tr);
  tr.appendChild(personFirstName);
  tr.appendChild(personLastName);
  tr.appendChild(personDateOfBirth);
  tr.appendChild(personWeight);
  addDeleteButton(tr);
}


function fillTextContent(newPerson,personFirstName,personLastName,personDateOfBirth,personWeight) {
  personFirstName.textContent = newPerson.firstName;
  personLastName.textContent = newPerson.lastName; 
  personDateOfBirth.textContent = newPerson.dateOfBirth;
  personWeight.textContent = newPerson.weight; 
}


function addDeleteButton(tr) {
  let btn = document.createElement("BUTTON"); 
  btn.innerHTML = "X"; 
  btn.setAttribute('id','delete-button');
  tr.appendChild(btn);
  btn = document.getElementById("delete-button")
  //btn.addEventListener("click",deleteRow(tr));;             
}

/*function deleteRow(tr) {
  document.table.removeChild(tr);
} */

function addPersonHandler(event) {
  event.preventDefault();
  const firstName = document.getElementById("first-name-input").value;
  const lastName = document.getElementById("last-name-input").value;
  const dateOfBirth = document.getElementById("date-input").value;
  const weight = document.getElementById("weight-input").value;
  const newPerson = {
    firstName : firstName,
    lastName : lastName,
    dateOfBirth : dateOfBirth,
    weight : weight,
  };
  people.push(newPerson);
  renderPeople(newPerson);
}
addPeopleForm.addEventListener("submit", addPersonHandler);


