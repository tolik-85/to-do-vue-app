function isBadWord(word) {
  const badWords = ['баклажан', 'помидор', 'огурец']
  for (const badWord of badWords) {
    if (word.toLowerCase().includes(badWord)) return false
  }
  return true
}

export default isBadWord
