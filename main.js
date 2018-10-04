function convert() {
  var output = document.getElementById("output"); // Sets variable to output element
  var input = document.getElementById("input").value; // Gets input value

  output.value = ""; // Resets output value before for loop does its thing

  for (var i = 0; i < input.length; i++) { // loops to the length of the input element string
      output.value += input[i].charCodeAt(0).toString(2) + " "; // output value += current input location . character code . converts to binary value + addes space between each character binary value
  }
}
