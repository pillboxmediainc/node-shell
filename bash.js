const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

const prompt = 'prompt > ';
const commands = {
  pwd,
  ls,
  cat,
};
process.stdout.write(`${prompt}`);
process.stdin.on('data', data => {
  const [cmd, ...args] = data
    .toString()
    .trim()
    .split(' ');

  //   console.log(cmd);
  if (commands[cmd]) {
    commands[cmd](args);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
});
