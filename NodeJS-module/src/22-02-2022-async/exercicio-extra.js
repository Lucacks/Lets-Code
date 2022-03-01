const fsPromise = require('fs').promises;
const path = require('path');

(async () => {
  const folderPath = path.join(__dirname);
  const allFiles = await fsPromise.readdir(folderPath);
  
  const txtFiles = allFiles.filter(file => file.endsWith('.txt'));

  const readPromises = txtFiles.map(txtFile => {
    const filePath = path.join(__dirname, txtFile);
    return fsPromise.readFile(filePath, 'utf-8');
  });
  
  /* Não consegui */
})();