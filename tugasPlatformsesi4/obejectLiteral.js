let nilaiSiswa = [
  { nama: "Andi", nilai: 90 },
  { nama: "Rudi", nilai: 80 },
  { nama: "Dira", nilai: 100 },
];

let tertinggi = nilaiSiswa[0];

for (let i = 1; i < nilaiSiswa.length; i++) {
  if (nilaiSiswa[i].nilai > tertinggi.nilai) {
    tertinggi = nilaiSiswa[i];
  }
}

console.log(
  `Siswa dengan nilai tertinggi adalah ${tertinggi.nama} dengan nilai ${tertinggi.nilai}`
);
