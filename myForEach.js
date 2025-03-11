function myForEach(array, cb) {
  for (const item of array) {
    cb(item)
  }
}

myForEach([3, 5, 7], item => {
  item * 100
})
