// Program Analisis Anggota Sindikat Mafia
// Tugas Pertemuan ke-3

const readline = require("readline");

// Membuat interface untuk input terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk menganalisa data
function analisaMafia(nama, umur, tempatTinggal, tabungan) {
  let pangkat = null;

  // Cek untuk Don
  if (
    umur > 40 &&
    ["Nevada", "New York", "Havana"].includes(tempatTinggal) &&
    tabungan > 10000000
  ) {
    pangkat = "Don";
  }

  // Cek untuk Underboss
  else if (
    umur >= 25 &&
    umur <= 40 &&
    ["New Jersey", "Manhattan", "Nevada"].includes(tempatTinggal) &&
    tabungan >= 1000000 &&
    tabungan <= 2000000
  ) {
    pangkat = "Underboss";
  }

  // Cek untuk Capo
  else if (
    umur >= 18 &&
    umur <= 24 &&
    ["California", "Detroit", "Boston"].includes(tempatTinggal) &&
    tabungan < 1000000
  ) {
    pangkat = "Capo";
  }

  // Output hasil analisa
  if (pangkat) {
    console.log(
      `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat ${pangkat}.`
    );
  } else {
    console.log(`${nama} tidak mencurigakan.`);
  }
}

// Input data dari user
rl.question("Masukkan nama: ", (nama) => {
  rl.question("Masukkan umur: ", (umur) => {
    rl.question("Masukkan tempat tinggal: ", (tempatTinggal) => {
      rl.question("Masukkan jumlah tabungan (dalam dolar): ", (tabungan) => {
        analisaMafia(nama, Number(umur), tempatTinggal, Number(tabungan));
        rl.close();
      });
    });
  });
});
