
  
function starPyramid(height) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = 1; j <= height - i ; j++) {
        row += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
      }
  
      console.log(row);
    }
  }
  
  starPyramid(5);
  