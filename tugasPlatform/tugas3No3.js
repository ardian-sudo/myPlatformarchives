// Program tarif wahana Disney Island

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan umur anak (dalam tahun): ", (umurInput) => {
  const umur = parseFloat(umurInput);

  // Validasi umur
  if (umur < 1) {
    console.log("Dilarang masuk");
    rl.close();
    return;
  }

  rl.question("Masukkan tinggi anak (dalam cm): ", (tinggiInput) => {
    const tinggi = parseFloat(tinggiInput);
    let tarif = 0;

    if (umur < 3) {
      tarif = 30000;
      if (tinggi > 70) tarif += 10000;
    } else if (umur < 7) {
      tarif = 40000;
      if (tinggi > 120) tarif += 15000;
    } else if (umur < 10) {
      tarif = 50000;
      if (tinggi > 150) tarif += 20000;
    } else {
      tarif = 80000;
    }

    console.log(
      `Tarif masuk untuk anak umur ${umur} tahun dengan tinggi ${tinggi} cm adalah Rp ${tarif.toLocaleString(
        "id-ID"
      )}`
    );
    rl.close();
  });
});
