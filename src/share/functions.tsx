import json_letter from '../share/test-board-2.json'
import json_words from '../share/dictionary.json'
const createArrayLetter = () => {
  console.log(json_letter.board)
  var arrayLeters = []
  var x = 0
  var y = 0
  for (var i = 0; i < json_letter.board.length; i++) {
    if (x >= 4) {
      x = 0
      y = y + 1
    }
    const obj = { letter: json_letter.board[i], id: i, x: x, y: y }
    arrayLeters.push(obj)
    x++

  }
  return arrayLeters
}

const isLetterAvailable = (letter, selected) => {
  var available = false
  console.log(letter)
  if (selected.length == 0) {
    return true
  }

  var xx = letter.x - selected[selected.length - 1].x
  var yy = letter.y - selected[selected.length - 1].y
  if (convertToPlus(xx) <= 1 && convertToPlus(yy) <= 1) {
    available = true
  }


  return available
}

const convertToPlus = (val) => {
  return val < 0 ? val * -1 : val
}

const isValidWord = (letter) => {
  const filter = json_words.words.filter(w => w == letter.toLowerCase())
  if (filter.length > 0) {
    return true
  } else {
    return false
  }
}

export default { createArrayLetter, isLetterAvailable, isValidWord }