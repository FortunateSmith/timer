
let counter = process.argv.slice(2);
let timer = counter.filter(num => num > 0 && !isNaN(num));

for (const num of timer) {
  let alarm = num * 1000;

  setTimeout(() => {
    process.stdout.write('(!)');
  }, alarm += 0);
}
