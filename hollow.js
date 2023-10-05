let n = 5;
let pattern = '';

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === 1 || j === 1 || i === 5|| j=== 5 ) {
            pattern += ' * ';
        } else {
            pattern += '   ';
        }
    }
    pattern += '\n';
}

console.log(pattern);
