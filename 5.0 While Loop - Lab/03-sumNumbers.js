arg => eval(arg.splice(1).join('+'))

//---------------------------------------------------(2)----------------------

function sumNumbers(arg) {
  return arg.slice(1,).reduce((a, b) => +a + +b )
}

console.log(sumNumbers(["100", "10", "20", "30", "40"]))
