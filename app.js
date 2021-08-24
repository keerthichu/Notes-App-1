const notes=require('./notes')
const yargs=require('yargs')
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
command:'remove',
describe:'Removing a note',
builder:{
    title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
    }
},
handler(argv) {
    notes.removeNote(argv.title)
}
})
yargs.command({
    command:'list',
    describe: 'List the note',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Reading a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
    })
yargs.parse()

// const command = process.argv[2]
// if (command==='add'){
//     console.log('Adding note')
// }else if(command==='remove'){
//     console.log('Removing note')
// }

// const chalk = require ('chalk')
// console.log(chalk.green.inverse('success'))

//console.log(process.argv)

// const validator = require ('validator')
// console.log(validator.isEmail('abc@gmail.com'))

// const getNotes=require('./notes.js')
// console.log(getNotes())

//const add = require('./utils.js')
// console.log(add(4,2))

// const fs = require ('fs')
// fs.writeFileSync('Notes.txt','This is my note')