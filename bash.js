process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline
  if(cmd === 'pwd'){
    process.stdout.write(process.cwd());
  }
  //process.stdout.write('\nYou typed: ' + cmd);
  process.stdout.write('\nprompt < ');
})
