const http = require("http");
const port = 8000;
const motoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: { firstName: "Andrea", lastName: "Dovizioso", country: "Italy" },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: { firstName: "Cal", lastName: "Crutchlow", country: "UK" },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: { firstName: "Valentino", lastName: "Rossi", country: "Italy" },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: { firstName: "Andrea", lastName: "Dovizioso", country: "Italy" },
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(motoGP, null, 2));
    return;
  }

  if (req.url === "/country") {
    const kelompokNegara = {};
    motoGP.forEach((item) => {
      const negara = item.winner.country;
      if (!kelompokNegara[negara]) kelompokNegara[negara] = [];
      kelompokNegara[negara].push(item);
    });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(kelompokNegara, null, 2));
    return;
  }

  if (req.url === "/name") {
    const kelompokNama = {};
    motoGP.forEach((item) => {
      const nama = `${item.winner.firstName} ${item.winner.lastName}`;
      if (!kelompokNama[nama]) kelompokNama[nama] = [];
      kelompokNama[nama].push(item);
    });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(kelompokNama, null, 2));
    return;
  }

  res.writeHead(400, { "Content-Type": "text/plain" });
  res.end("Bad Request");
});

server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
