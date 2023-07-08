let noteViewer
let notesContainer
let titleInput
let descInput
let noteArr = []

document.addEventListener("DOMContentLoaded", function(event) { 
    noteViewer = document.getElementById("note-viewer")
    notesContainer = document.getElementById("notes-container")
    titleInput = document.getElementById('note-title')
    descInput = document.getElementById('note-description')
});

function displayNoteViewer() {
    console.log('displaying')
    noteViewer.classList.remove('hidden')
}

function hideNoteViewer() {
    console.log('hiding')
    titleInput.value = ""
    descInput.value = ""
    noteViewer.classList.add('hidden')
}

function onAddNoteClick() {
    console.log('test')
    displayNoteViewer();
}

function createNote() {
    if(titleInput.value === "" && descInput.value === ""){
        hideNoteViewer();
        return;
    }

    if(titleInput.value === ""){
        titleInput.value = "no title"
    }

    let note = document.createElement('div')
    note.classList.add('note')

    let noteBtn = document.createElement('div')
    noteBtn.classList.add("note-btn")

    let title = document.createElement('span')
    title.classList.add('note-btn-title')
    title.innerHTML = titleInput.value

    let description = document.createElement('p')
    description.classList.add("note-btn-desc")
    description.innerHTML = descInput.value

    noteBtn.appendChild(title)
    noteBtn.appendChild(description)
    noteBtn.addEventListener('click', () => editNote(noteArr.length))

    note.appendChild(noteBtn)
    notesContainer.appendChild(note)

    noteArr.push(note)

    titleInput.value = ""
    descInput.value = ""

    hideNoteViewer()

    console.log(noteArr)
}

function editNote(noteIndex){
    displayNoteViewer()
}


