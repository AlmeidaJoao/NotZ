const fs = require('fs')
const chalk = require('chalk')

// Add a note
const addNotes = (title, body) => {
  const notes = loadNotes() 
  const dualNote = notes.find(note => note.title === title)
  if (!dualNote) {
    notes.push({title, body})
    saveNotes(notes)
    console.log(chalk.greenBright('Note Added Successfully!'))
  } else {
    console.log(chalk.redBright(`Title "${title}" already exists`))
  }
  
}

// List All Notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.italic.magentaBright('Listing All Notes . . .'))
  notes.forEach( note => {
    console.log(`${chalk.yellowBright(note.title)} ${chalk.cyanBright(note.body)}`)
  })
}

// Remove a note
const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(notes => notes.title !== title)
  if (notes.length === filteredNotes.length) {
    console.log(chalk.redBright(`Note "${title}" not found!`))
  } else {
    saveNotes(filteredNotes)
    console.log(chalk.whiteBright.inverse('Note removed'))
  }
}

// Read one Note
const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find(note => note.title === title)

  if (note) {
    console.log(`${chalk.yellowBright(note.title)} ${chalk.cyanBright(note.body)}`)
  } else {
    console.log(chalk.redBright(`Note "${title}" not found!`))
  }
}

// Save notes
const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

// Load a notes 
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const data = dataBuffer.toString()
    return JSON.parse(data)
  } catch (error) {
    return [] 
  }
}

module.exports = {
  addNotes: addNotes,
  listNotes: listNotes,
  removeNote: removeNote,
  readNote: readNote
}