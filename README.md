# NotZ
$ A command line based notes app

## Prerequisites 

Node.js

## Built With

* [Node.js] - You know what it is
* [Chalk](https://www.npmjs.com/package/chalk) - Terminal styling
* [Yargs](https://www.npmjs.com/package/yargs) - Parse command line arguments

## Getting Started 🦮

Reload npm packages 🔄
```
npm install
```

## Usage

### Commands 
```
Commands:
  app.js add     Add a note                                         [aliases: a]
  app.js list    List all available notes                          [aliases: ls]
  app.js remove  Remove a certain note                    [aliases: rem, r, del]
  app.js read    Read one note                                      [aliases: r]

Options:
  --help     Show help                                                 [boolean]
  ```

Add a note✅

```
app.js add

Options:
  --help     Show help                                                 [boolean]
  --title    Sets the title of the note                      [string] [required]
  --body     Sets the body of the note                       [string] [required]

Example:  node app.js add --title="Monday" --body="Buy beans"
```

Remove a certain note ❌

```
app.js remove

Options:
  --help     Show help                                                 [boolean]
  --title    Title of the note to be removed                 [string] [required]
  
Example: node app.js remove --title="Monday"
```

List all available notes 📃

```
app.js list 

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
Example: node app.js list
```

Read one note 📖

```
app.js read

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --title    Title of the note to be read                    [string] [required]
Example: node app.js read --title="Monday"
```


## Authors 

* **Almeida de Almeida** - *Initial work* - [AlmeidaJoao](https://github.com/AlmeidaJoao)


## Acknowledgments

* Boredom
* Inspiration
* etc
