const fs = require('fs');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
}

fs.readFile('todo.txt', 'utf-8', fileReadCallback);

// const data = fs.readFileSync('todo.txt', 'utf-8');
// console.log(data);