var clc = require('cli-color');

// Credit: http://www.javascripter.net/faq/numberisprime.htm
var isPrime = function (n) {
  if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
  if (n==leastFactor(n)) return true;
  return false;
}

// leastFactor(n)
// // returns the smallest prime that divides n
// //     NaN if n is NaN or Infinity
// //      0  if n=0
// //      1  if n=1, n=-1, or n is not an integer

var leastFactor = function (n) {
  if (isNaN(n)||!isFinite(n)) return NaN;
  if (n==0) return 0;
  if (n%1||n*n<2) return 1;
  if (n%2==0) return 2;
  if (n%3==0) return 3;
  if (n%5==0) return 5;

  var m=Math.sqrt(n);

  for (var i=7;i<=m;i+=30) {
    if (n%i==0) return i;
    if (n%(i+4)==0) return i+4;
    if (n%(i+6)==0) return i+6;
    if (n%(i+10)==0) return i+10;
    if (n%(i+12)==0) return i+12;
    if (n%(i+16)==0) return i+16;
    if (n%(i+22)==0) return i+22;
    if (n%(i+24)==0) return i+24;
  }
  return n;
}

var x = 5000;
var np = 0;
var w = 135;

/* Special 'w's
 * 29
 */
for (var i = 1; i <= x; i++) {
  if (i % w == 1)
    process.stdout.write('\n');
  if (isPrime(i)) {
    np++;
    process.stdout.write(clc.green('* '));
    //process.stdout.write(clc.green(i) + '\t');
  }
  else
    process.stdout.write(clc.red('* '));
    //process.stdout.write(clc.red(i) + '\t');
}

process.stdout.write('\n');
process.stdout.write('Num tested:\t' + x);
process.stdout.write('\n');
process.stdout.write('Primes:\t\t' + np);
process.stdout.write('\n');
process.stdout.write('Non-primes:\t' + (x - np));
process.stdout.write('\n');
process.stdout.write('% Primes:\t' + (np / x * 100));
process.stdout.write('\n');
