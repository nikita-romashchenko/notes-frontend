import { getNotes } from "./api/app.api.js";
const date = new Date();
let notesArr = [];
let pressedNote = null;
let resizing = false;

const notesContainer = document.getElementById("notes-container");
const noteDate = document.getElementById("date-btn");
const noteBody = document.getElementById("note-body");

const sidebar = document.getElementById("sidebar");
const sidebarResizeDiv = document.getElementById("sidebar-resize");

window.onload = init;

function init() {
  const token = window.localStorage.getItem("ACCESS_TOKEN");
  if (token === null) {
    window.location.replace("/auth/auth.html");
  }

  const savedSidebarWidth = window.localStorage.getItem("sidebarWidth");
  if (savedSidebarWidth !== null) {
    sidebar.style.width = `${savedSidebarWidth}px`;
  } else {
    sidebar.style.width = "250px";
  }

  feather.replace();

  // Editor.js initialization
  const editor = new EditorJS({
    holder: "editorjs",
    tools: {
      header: Header,
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
      list: {
        class: List,
        inlineToolbar: true,
        config: {
          defaultStyle: "unordered",
        },
      },
    },
  });

  // const editor = new EditorJS();

  //sidebarResizingEvents
  sidebarResizeDiv.addEventListener(
    "mousedown",
    () => {
      resizing = true;
    },
    false
  );

  document.addEventListener(
    "mousemove",
    (event) => {
      if (resizing) {
        sidebar.style.width = `${event.clientX}px`;
        window.localStorage.setItem("sidebarWidth", event.clientX);
      }
    },
    false
  );

  document.addEventListener(
    "mouseup",
    () => {
      resizing = false;
    },
    false
  );
}

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
  noteDate.innerHTML = `${date.getHours()}:${date.getMinutes()}`;

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
