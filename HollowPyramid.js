const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1 || i === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}

console.log(str);