


process.stdout.write('x Processing, please wait...\r1\n');




setTimeout(() => {
  process.stdout.write('\r|   Processing, please wait...');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   Processing, please wait...');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   Processing, please wait...');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   Processing, please wait...'); 
}, 700);
