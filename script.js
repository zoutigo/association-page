const closeButton = document.getElementById('close');

const tbody = document.querySelector('tbody');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();
  let credentials = {};
  for (
    var countElement = 0;
    countElement < form.elements.length;
    countElement++
  ) {
    const { name, value } = form.elements[countElement];

    switch (name) {
      case 'name':
        credentials.name = value;
        break;
      case 'email':
        credentials.email = value;
      case 'message':
        credentials.message = value;
        break;

      default:
        break;
    }
  }
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let button = document.createElement('button');

  button.classList.add('btn');
  button.classList.add('btn-sm');
  button.classList.add('btn-dark');
  button.innerText = 'Contacter';
  td2.append(button);
  td1.append(credentials.name);
  tr.append(td2);
  tr.prepend(td1);
  tbody.prepend(tr);

  closeButton.click();

  e.preventDefault();
});
