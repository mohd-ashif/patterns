

const n = 5; 
for (let i = 1; i <= n; i++) {
    let line = " ";
    for (let j = 1; j <= n - i; j++) {
        line += " "; // Add spaces for left padding
    }
    if (i === 1 || i === n) {
      
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*";
        }
    } else {
       
        line += "* ";
        for (let k = 1; k <= 2 * i - 3; k++) {
            line += " ";
        }
        line += "* ";
    }
    console.log(line);
}


