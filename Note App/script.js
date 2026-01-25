const notesContainer = document.querySelector('.notes-container');
const createBtn = document.getElementById('btn');

// Show saved notes from localStorage
const showNotes = () => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) notesContainer.innerHTML = savedNotes;
};

showNotes();

// Update localStorage whenever notes change
const updateStorage = () => {
  localStorage.setItem('notes', notesContainer.innerHTML);
};

// Create a new note
createBtn.addEventListener('click', () => {
  const inputBox = document.createElement('p');
  const img = document.createElement('img');

  inputBox.className = 'input-box';
  inputBox.contentEditable = 'true';
  img.src = 'images/delete.png';

  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage();
});

// Handle deleting and typing
notesContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === 'P') {
    document.querySelectorAll('.input-box').forEach((note) => {
      note.oninput = updateStorage;
    });
  }
});

// Modern way to insert line breaks inside editable elements
notesContainer.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);

    const br = document.createElement('br');
    range.insertNode(br);

    range.setStartAfter(br);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }
});