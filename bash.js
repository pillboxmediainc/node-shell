const pwd = require('./pwd');
const prompt = 'prompt > ';
process.stdout.write(`${prompt}`);
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd();
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write(`\n${prompt}`);
});
