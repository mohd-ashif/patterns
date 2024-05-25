let n = 5;
let row = '';

for (let i = 1; i <= n; i++) {
  row = '';

  // Add spaces before the stars
  for (let j = n; j > i; j--) {
    row += ' ';
  }

  // Add stars
  for (let k = 1; k <= i; k++) {
    row += '* ';
  }

  // Print each row
  console.log(row);
}
