const n = 5;
 let row = '';

for(let i =1;i<= n ; i++){
 
  for(let j = 1 ;j <=n -i ;j++ ){
    row += ' ';
  }
  for(let k = 1;k <= 2*i-1; k++){
    row +='*'
  }
  row+='\n'
}

for(let i =n; i >= 1 ;i--){

  for(let j = 1;j<= n -i;j++){
    row +=' '
  }
  for(let k =1;k <=2*i-1; k++){
    row+= "*" 
    
  }
 row+= '\n'
}
 console.log(row)
