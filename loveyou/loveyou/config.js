// ============================================================
//  LOVEYOU - FILE PERSONALISASI
//  Ubah isi di bawah ini, simpan, lalu deploy ulang ke Vercel.
//  Semua teks bebas kamu ganti. Tanda kutip " " jangan dihapus.
// ============================================================
window.LOVEYOU_CONFIG = {

  // Nama panggilan dia. Muncul di judul, surat, dan jawaban akhir.
  name: "Sayang",

  // Namamu. Muncul di bagian paling bawah halaman. Kosongkan "" kalau tidak mau.
  from: "",

  // Tanggal jadian, format TAHUN-BULAN-TANGGAL (contoh: 2025-02-14).
  // Kalau tanggalnya di masa depan, halaman menampilkan hitung mundur.
  startDate: "2025-02-14",

  // Isi surat. Tulis {nama} untuk menyebut namanya otomatis.
  // \n artinya pindah baris, \n\n artinya satu baris kosong.
  letter:
    "Halo {nama},\n\n" +
    "Aku nggak jago ngomong yang manis-manis, jadi aku bikin ini. " +
    "Terima kasih sudah sabar, sudah ketawa di jokes-ku yang garing, dan sudah jadi tempat pulang paling nyaman.\n\n" +
    "Kalau hari ini terasa berat, ingat ada satu orang yang bangga banget sama kamu.\n\n" +
    "Aku sayang kamu. Hari ini, besok, dan seterusnya.\n\n" +
    "Peluk jauh,\nAku",

  // Daftar alasan kenapa kamu sayang dia. Tambah atau kurangi sesukamu.
  reasons: [
    "Kamu bikin hari yang biasa saja terasa seperti hari libur.",
    "Cara kamu tertawa sampai matamu hilang.",
    "Kamu peduli sama hal-hal kecil yang orang lain lewatkan.",
    "Kamu tetap di sampingku waktu aku lagi nggak menyenangkan.",
    "Suaramu bikin kepalaku tenang.",
    "Kamu berani jadi diri sendiri, dan aku suka banget itu.",
    "Kamu selalu ingat hal yang kuceritakan sekilas.",
    "Kamu bikin aku mau jadi orang yang lebih baik.",
    "Diam bersamamu pun rasanya cukup.",
    "Kamu lucu, bahkan waktu nggak berusaha lucu.",
    "Kamu percaya sama aku, bahkan saat aku ragu.",
    "Karena itu kamu. Itu alasan paling lengkap."
  ],

  // Kenangan kalian, dari awal sampai sekarang.
  // when = waktu singkat, title = judul, text = ceritanya.
  memories: [
    { when: "Awal cerita", title: "Pertama kali kita ketemu", text: "Hari itu aku belum tahu, ternyata kamu bakal jadi orang yang paling sering kuhubungi." },
    { when: "Mulai dekat", title: "Obrolan yang nggak mau selesai", text: "Dari satu pesan singkat jadi percakapan panjang sampai lupa waktu." },
    { when: "Hari jadian", title: "Hari kita resmi berdua", text: "Gugup, senyum-senyum sendiri, dan akhirnya semuanya jelas." },
    { when: "Hari ini", title: "Dan masih berlanjut", text: "Cerita kita belum selesai, masih banyak halaman kosong untuk kita isi." }
  ],

  // Kupon yang bisa dia "pakai". title = nama kupon, desc = penjelasan.
  coupons: [
    { title: "Satu kali peluk lama", desc: "Berlaku kapan saja, tanpa batas waktu." },
    { title: "Makan malam pilihanmu", desc: "Kamu yang pilih tempat, aku yang traktir." },
    { title: "Aku dengerin curhat", desc: "Tanpa memotong dan tanpa melihat HP." },
    { title: "Pijat 15 menit", desc: "Bahu atau kaki, kamu yang tentukan." },
    { title: "Malam nonton bareng", desc: "Film pilihanmu, camilan dariku." },
    { title: "Dimaafkan satu kali", desc: "Untuk satu kesalahan kecil. Pakai dengan bijak." }
  ],

  // Foto kalian (opsional). Taruh file foto di folder "foto", lalu tulis namanya di sini.
  // Kalau daftar ini kosong [], bagian foto tidak muncul.
  // Contoh:
  // photos: [
  //   { src: "foto/1.jpg", caption: "Kencan pertama" },
  //   { src: "foto/2.jpg", caption: "Liburan kita" }
  // ],
  photos: [],

  // Pertanyaan di bagian akhir (tombol "Tidak" akan kabur).
  question: "Mau sama aku terus?",

  // Pesan yang muncul setelah dia menekan "Mau".
  finalMessage: "Terima kasih sudah bilang mau. Aku janji bikin hari-harimu lebih ringan.",

  // Biarkan false supaya tombol "Ubah" tidak kelihatan oleh dia.
  // Untuk membuka editor sendiri, tambahkan ?edit=1 di ujung alamat web.
  showEditor: false
};
