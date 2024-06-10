/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');
// const path = require('path');
const { resolve } = require('path');

// const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
});

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));
const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    writableStream.end();
});