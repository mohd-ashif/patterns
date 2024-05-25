let n = 5; // you can take input from prompt or change the value
let string = "";

// External loop
for (let i = 1; i <= n; i++) {
  // printing characters with spaces
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);

    // add space between characters except for the last character in the row
    if (j < i - 1) {
      string += " ";
    }
  }
  string += "\n";
}

console.log(string);
