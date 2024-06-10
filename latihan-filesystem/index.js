// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca file');
        return;
    }
    console.log(data);
}

fs.readFile(path.resolve(__dirname, 'notes.txt'), 'utf-8', fileReadCallback);