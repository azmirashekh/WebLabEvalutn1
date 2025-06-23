function addStudent() {
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const marks = document.getElementById('marks').value;

  if (!name || !id || !marks) {
    alert("Please fill all fields.");
    return;
  }

  const table = document.getElementById('studentTable');
  const row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = id;
  row.insertCell(2).innerText = marks;

  document.getElementById('name').value = '';
  document.getElementById('id').value = '';
  document.getElementById('marks').value = '';
}

function openPopup() {
  const id = document.getElementById('modifyId').value;
  if (!id) {
    alert("Enter an ID to modify.");
    return;
  }
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
}

function updateMarks() {
  const id = document.getElementById('modifyId').value;
  const newMarks = document.getElementById('newMarks').value;

  const table = document.getElementById('studentTable');
  let found = false;

  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[1].innerText === id) {
      table.rows[i].cells[2].innerText = newMarks;
      found = true;
      break;
    }
  }

  if (!found) {
    alert("ID not found!");
  }

  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
  document.getElementById('newMarks').value = '';
}
