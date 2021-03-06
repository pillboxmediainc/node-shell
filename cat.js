const fs = require('fs');

module.exports = function(filenames) {
  filenames.forEach(filename => {
    fs.readFile(filename, 'utf8', (err, fileContent) => {
      if (err) {
        console.error(err);
      }
      process.stdout.write(`\n${filename}\n${fileContent}\n\n`);
    });
  });
};
