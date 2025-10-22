const tambah = require('./modules/tambah');
const kurang = require('./modules/kurang');
const kali = require('./modules/kali');
const bagi = require('./modules/bagi');

const a = 10;
const b = 5;

console.log("=== Aplikasi Operasi Matematika Modular ===");
console.log(`Penjumlahan ${a} + ${b} = ${tambah(a, b)}`);
console.log(`Pengurangan ${a} - ${b} = ${kurang(a, b)}`);
console.log(`Perkalian ${a} * ${b} = ${kali(a, b)}`);
console.log(`Pembagian ${a} / ${b} = ${bagi(a, b)}`);
