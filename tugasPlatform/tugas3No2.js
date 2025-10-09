// Program menghitung total kalori dari beberapa jenis olahraga

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("=== Program Hitung Kalori Olahraga ===");
console.log("Keterangan:");
console.log("- Lari: 60 kalori / 5 menit");
console.log("- Push-up: 200 kalori / 30 menit");
console.log("- Plank: 5 kalori / 1 menit\n");

// menghitung total kalori
function hitungKalori(lari, pushup, plank) {
  const kaloriLari = (60 / 5) * lari;
  const kaloriPushup = (200 / 30) * pushup;
  const kaloriPlank = 5 * plank;

  return kaloriLari + kaloriPushup + kaloriPlank;
}

// Input
rl.question("Masukkan lama olahraga lari (menit): ", (lari) => {
  rl.question("Masukkan lama olahraga push-up (menit): ", (pushup) => {
    rl.question("Masukkan lama olahraga plank (menit): ", (plank) => {
      lari = parseFloat(lari);
      pushup = parseFloat(pushup);
      plank = parseFloat(plank);

      if (lari <= 1 && pushup <= 1 && plank <= 1) {
        console.log("Setiap aktivitas harus lebih dari 1 menit!");
      } else {
        const totalKalori = hitungKalori(lari, pushup, plank);
        console.log(
          `\nTotal kalori yang terbakar: ${totalKalori.toFixed(2)} kalori`
        );
      }

      rl.close();
    });
  });
});
