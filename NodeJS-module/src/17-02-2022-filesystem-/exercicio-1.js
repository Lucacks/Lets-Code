const fsPromise = require('fs').promises;
const path = require('path');

const files = [
    'file1.txt',    
    'file2.txt',    
    'file3.txt',    
]

const folderPath = path.join(__dirname, 'txt-files');

fsPromise.readdir(folderPath).then(files => { 
    files.forEach(file => {
        const filePath = path.join(__dirname, 'txt-files', file);
        fsPromise.readFile(filePath, 'utf-8').then(content => {
            const contentWithLineBreak = `${content}\n`
        })
    })
})