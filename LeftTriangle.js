const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    str += '\n';
}
console.log(str);