const repl = require('repl')
const local = repl.start('$')
local.on('exit', () => {
  console.log('Exit the  nodeJs')
  process.exit()
})
