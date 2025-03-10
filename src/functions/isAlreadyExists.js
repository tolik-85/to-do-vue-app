function isAlreadyExists(taskText, tasks) {
  for (const task of tasks) {
    if (task.text === taskText) {
      return true
    }
  }
}
// function isAlreadyExists(taskText, tasks) {
//   tasks.forEach(task => {
//     if (task.text === taskText) {
//       return true
//     }
//   })
// }

export default isAlreadyExists
