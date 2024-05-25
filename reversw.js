let n = 5;

for (let i = 0; i < n; i++) {
  let row = ''

  for (let j = 0; j < i; j++) {
   row += ' '
  }
 
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    row += '*'
  }
  console.log(row);
}

// let n= 5;
  
// for(let i=1;i<=n;i++){
//   let star=" "

//   for(let j =1;j<= n-i  ;j++){
//     star += ' ';
//   } 
 
//   for(let k=1; k<i;k++){
//     star += ' *'

//   }
  
// console.log(star)
// }

