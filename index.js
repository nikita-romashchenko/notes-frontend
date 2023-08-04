const date = new Date();

const notesContainer = document.getElementById("notes-container");
let pressedNote = null;

function CreateNote() {
  let note = document.createElement("div");
  note.classList.add("note");
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

  //   notesContainer.appendChild(note);
  notesContainer.insertBefore(note, notesContainer.children[0]);
}

function onNotePress(event) {
  if (pressedNote !== null) {
    pressedNote.classList.remove("pressed");
    pressedNote.classList.remove("selected");
  }
  event.target.classList.add("pressed");
  pressedNote = event.target;
}

function onTextareaClick() {
  if (pressedNote === null) {
    CreateNote();
  }
}

function onAddNoteClick() {
  CreateNote();
}
