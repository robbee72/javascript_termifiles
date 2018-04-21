


let mlbAmericanCentral =  [
    { team: 'Minnesota', wnPER: .900, wins: 9, losses: 1},
    { team: 'Kansas City', wnPER: .1, wins: 1, losses: 9},
    { team: 'Detroit', wnPER: .833, wins: 10, losses: 2},
    { team: 'Chicago', wnPER: .667, wins: 6, losses: 4},
    { team: 'Cleveland', wnPER: .364, wins: 4, losses: 7}
]


function custom_compare (a,b) {
  return a.wnPER - b.wnPER;
}

mlbAmericanCentral.sort(custom_compare).reverse();

  for (let i = 0; i < mlbAmericanCentral.length; i++) {
    console.log(
      mlbAmericanCentral[i].team,
      mlbAmericanCentral[i].wnPER,
      mlbAmericanCentral[i].wins,
      mlbAmericanCentral[i].losses
    );
  }



  // //   DON'T LIKE   generator function
  // const league = {
  //   american: 'American',
  //   national: 'National'
  // };
  //
  // const division = {
  //   east: 'East',
  //   central: 'Central',
  //   west: 'West'
  // };
  //
  // const team = {
  //   mn: 'Minnesota',
  //   kc: 'Kansas City',
  //   det: 'Detroit',
  //   chisox: 'Chicaago White Sox',
  //   cleve: 'Cleveland'
  // };
  //
  // function* AmericanCentral(division, team) {
  //   yield team.mn;
  //   yield team.kc;
  //   yield team.det;
  //   yield team.chisox;
  //   yield team.cleve;
  // }
  // const names = [];
  //   for (let name of AmericanCentral(team)) {
  //     names.push(name);
  //   }
  // names;
  // console.log(names);
