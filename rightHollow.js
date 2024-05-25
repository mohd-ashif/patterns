const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    
    for (let j = 1; j <= n - i; j++) {
        str += '  ';
    }
    
    for (let k = 1; k <= i; k++) {
        if (k === 1 || k === i || i === n) {
            str += '* ';
        } else {
            str += '  ';
        }
    }
    
    str += '\n';
}    

console.log(str);