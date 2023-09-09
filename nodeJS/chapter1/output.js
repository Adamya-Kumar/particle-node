// const x = '1'
// const y = '2'
// console.log(x, y)

// setTimeout(() => {
//   console.log('i am %s and my age is %d', 'adamya', 21)
// }, 3000)
// console.log('out side the function')
// // %i of intger and %o of object
// console.clear()
// console.count('after the clear console....')
// console.count('after the clear console....')
// console.count('after the clear console....')
// console.count('after the clear console....')
// console.count('after the clear console....')
// console.count(' clear console....')
// console.count('after the clear console....')
// console.count('after the clear console....')
// console.count('after the clear console....')
// console.count('after the clear console....')
// console.count(' clear console....')
// console.count('after the clear console....')
// console.count('after the clear console....')
// console.count('after the clear console....')
// console.countReset('after the clear console....')

// const function1 = () => console.trace()
// const function2 = () => function1()
// const function3 = () => function2()
// function3()

// const sum = () => console.log(`the sum of 2 and 3 is : ${2 + 3}`)
// const multiply = () => console.log(`the multiplication of 2 and 3 : ${2 * 3}`)
// const measureTime = () => {
//   console.time('sum() is')
//   sum()
//   console.timeEnd('sum() is')
//   console.time('multiply() is')
//   multiply()
//   console.timeEnd('multiply() is')
// }
// measureTime()

// progess bar....
// const progessBar = require('progress')
// const bar = new progessBar('downloading [:bar] :rate/bps :percent :etas', {
//   total: 100,
// })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 1000)

// difference progess bar

// const process = require('process')
// const rdl = require('readline')
// class LoadingBar {
//   constructor(size) {
//     this.size = size
//     this.cursor = 0
//     this.timer = null
//   }
//   start() {
//     process.stdout.write('\x1B[?25l')
//     for (let i = 0; i < this.size; i++) {
//       process.stdout.write('\u2591')
//     }
//     rdl.cursorTo(process.stdout, this.cursor, 0)
//     this.timer = setInterval(() => {
//       process.stdout.write('\u2588')
//       this.cursor++
//       if (this.cursor >= this.size) {
//         clearTimeout(this.timer)
//       }
//     }, 100)
//   }
// }
// const ld = new LoadingBar(50)
// ld.start()

// highlight the text  on  node terminal ....
const chalk = require('chalk')
console.log(chalk.green('the NodeJs downloaded...'))
