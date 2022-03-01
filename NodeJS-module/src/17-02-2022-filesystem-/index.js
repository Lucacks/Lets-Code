const fs = require('fs');
const path = require('path');

fs.readdir(__dirname, (err, files) => {
    files.forEach(f => {
        const fPath = path.join(__dirname, f);
        fs.stat(fPath, (_, fileStats) => {
            console.log(`File: ${f}\t isFile: ${fileStats.isFile()}\t isDir:${fileStats.isDirectory()}\t size: ${fileStats.size} bytes`)
        })
    })
})