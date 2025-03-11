// function isAlreadyExists(taskText, tasks) {
//   let flag = false
//   tasks.forEach(task => {
//     if (task === taskText) {
//       flag = true
//     }
//   })
//   return flag
// }

function isAlreadyExists(tasks, taskText) {
  return tasks.some(task => task.text === taskText)
}

console.log(isAlreadyExists([{ text: 'q' }, { text: 'e' }], 'q'))

// console.log(typeof true)

// console.log(typeof undefined)
