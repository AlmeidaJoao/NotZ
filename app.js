const yargs = require('yargs')

const notes = require('./notes')

// add note command
yargs.command({
  command: 'add',
  aliases: ['a'],
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Sets the title of the note',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Sets the body of the note',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body)
  }
})

// list notes command
yargs.command({
  command: 'list',
  aliases: ['ls'],
  describe: 'List all available notes',
  handler() {
    notes.listNotes()
  }
})

// remove note command 
yargs.command({
  command: 'remove',
  aliases: ['rem', 'r', 'del'],
  describe: 'Remove a certain note',
  builder: {
    title: {
      describe: 'Title of the note to be removed',
      type: 'string',
      demandOption: true
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// read one note command
yargs.command({
  command: 'read',
  describe: 'Read one note',
  aliases: ['r'],
  builder: {
    title: {
      describe: 'Title of the note to be read',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse()