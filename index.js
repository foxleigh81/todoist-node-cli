var chalk = require('chalk')
var axios = require('axios')

var authToken = '1c1768927d356b840c3767fde38d679de9638865'
var entryPoint = 'https://beta.todoist.com/API/v8/projects?token=' + authToken

axios.get(entryPoint)
.then(function (response) {
  for (thing in response) {
    console.log(thing)
  }
})
.catch(function (error) {
  console.log(chalk.red.bold('You done fucked up:'), chalk.white(error))
})
