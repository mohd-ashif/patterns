
let pattern = "";


for (let i = 0; i < 5; i++) {

  pattern += "*****\n";


  if (i < 4) {
    pattern += "*   *\n";
  }
  else if (i < 3) {
      pattern += "*   *\n";
    }
    else if (i < 2) {
      pattern += "*   *\n";
    }
  }



console.log(pattern);