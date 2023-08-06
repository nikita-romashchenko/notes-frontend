const date = new Date();
let notesArr = [];
let pressedNote = null;

const notesContainer = document.getElementById("notes-container");
const noteDate = document.getElementById("date-btn");
const noteBody = document.getElementById("note-body");

function CreateNote() {
  let note = document.createElement("div");
  note.classList.add("note", "new-note");
  note.addEventListener("click", (event) => onNotePress(event));
  if (pressedNote !== null) {
    pressedNote.classList.remove("pressed");
    pressedNote.classList.remove("selected");
  }

  note.classList.add("selected");
  pressedNote = note;

  let noteTitle = document.createElement("span");
  noteTitle.classList.add("note-title");
  noteTitle.innerHTML = "New Note";

  let noteDate = document.createElement("span");
  noteDate.classList.add("note-date");
  noteDate.innerHTML = `${date.getHours()}:${date.getMinutes()} `;

  let noteHeader = document.createElement("span");
  noteHeader.classList.add("note-header");
  noteHeader.innerHTML = "No additional text";

  note.appendChild(noteTitle);
  note.appendChild(document.createElement("br"));
  note.appendChild(noteDate);
  note.appendChild(noteHeader);

  notesContainer.insertBefore(note, notesContainer.children[0]);

  noteBody.focus();
}

function DeleteNote(elem = null) {
  if (elem === null) {
    pressedNote.remove();
  } else {
    elem.remove();
  }
}

function onNotePress(event) {
  if (pressedNote !== null) {
    pressedNote.classList.remove("pressed");
    pressedNote.classList.remove("selected");
  }
  let note = event.target.closest(".note");
  note.classList.add("pressed");
  pressedNote = note;
}

function onTextareaClick() {
  if (pressedNote === null) {
    CreateNote();
  } else {
    pressedNote.classList.add("selected");
  }
}

function onAddNoteClick() {
  CreateNote();
}
