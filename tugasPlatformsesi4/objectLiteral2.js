var motoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
      firstName: "Cal",
      lastName: "Crutchlow",
      country: "UK",
    },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
      firstName: "Valentino",
      lastName: "Rossi",
      country: "Italy",
    },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
];

let result = {};

motoGP.forEach((event) => {
  const country = event.winner.country;
  const name = `${event.winner.firstName} ${event.winner.lastName}`;
  const winLocation = `${event.circuit}, ${event.location}`;

  if (!result[country]) {
    result[country] = {
      WinningCircuits: [],
      totalWin: 0,
    };
  }

  result[country].WinningCircuits.push({
    name: name,
    winLocation: winLocation,
  });

  result[country].totalWin++;
});

console.log(JSON.stringify(result, null, 2));
