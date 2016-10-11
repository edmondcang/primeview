var clc = require('cli-color');

function isPrime(number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
  }
  return number > 1;
}

for (var i = 0; i < 1000; i++) {
  if (i % 14 == 0)
    process.stdout.write('\n');
  if (isPrime(i))
    process.stdout.write(clc.green(i) + '\t');
  else
    process.stdout.write(i + '\t');
}

process.stdout.write('\n');
