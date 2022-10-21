'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    let all_chars  = Array.from(new Set(s));
    let max = 0;
            
    for (let i = 0; i < all_chars.length; i++) {
        let a = all_chars[i];
        
        for (let j = i+1; j < all_chars.length; j++) {
            let b = all_chars[j];
            let current_max = 0;
            
            let last  = "";
            for (let aux = 0; aux < s.length && current_max != -1; aux++) {
                if(s[aux] == a || s[aux] == b) {
                    if (last == "" || s[aux] != last) {
                        current_max++;
                        last = s[aux];
                    }
                    else {
                        current_max = -1;
                    }
                }
            }
            
            if (current_max > max)
                max = current_max;
        }
        
    }
    
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
