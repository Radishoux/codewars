function sumArray(array) {
  if (array == null){
    return 0
  }
  if (array.length < 2){
    return 0
  }
  var i = 0
  var sum = 0
  var lowest = array[0]
  var highest = array[0]
  while (i < array.length){
    if (array[i] < lowest){
      lowest = array[i]
    }
    if (array[i] > highest){
      highest = array[i]
    }
    sum = sum + array[i]
    i = i + 1
  }
    sum = sum - lowest - highest
    return sum
  }