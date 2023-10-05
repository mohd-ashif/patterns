let n = 4 ;
let count  = 1;


for (let i = 1; i<= n ; i++){
    
    let row  = ' ';

    for (let j = n ; j > i ; j--   ){

        row += ' ' ; 
    }
    for (let k = 1; k <= i ; k ++ ,count++){

        row  +=  count + ' ';
        
       
    }
    

    console.log(row)
}   

