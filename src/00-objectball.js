function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}


function homeTeamName(){
    let object=gameObject();
    return object["home"] ["teamName"];
}
console.log(homeTeamName());





function numPointsScored(playerName){
    const object=gameObject();
    for(let key in object){
        const team=object[key];
        const players=team.players;

        if(players[playerName]){
            return players[playerName].points;
        }
    }
    return "player not found";
}

function shoeSize(playerName){
    const object=gameObject();
    for(let key in object){
        const team=object[key];
        const players=team.players

        if(players[playerName]){
            return players[playerName].shoe;
        }        
    }   
    return "shoe size  not found";
}


function teamColors(){
        const object=gameObject();
        const color=[];
        for(let key in object){
            const team=object[key];
            color.push(team.colors);            
        }
        return color;
    }

function teamNames(){
  const object=gameObject();
  const names=[];
  for(let key in object){
    const team=object[key];
    names.push(team.teamName);
  }
  return names;
}


function playerNumbers(teamName){
    const object = gameObject();
    const numbers = [];

    for (let key in object) {
        const team = object[key];
        if (team.teamName === teamName) {
            const players = team.players;
            for (let player in players) {
                numbers.push(players[player].number);
            }
        }
    }
return numbers;
}


function playerStats(playerName){
const object=gameObject();

for(let key in object){
    const team=object[key];
    const players=team.players;
    if(players[playerName]){
        return players[playerName];
    }
}
return "status not found";
}

function bigShoeRebounds() {
  const object = gameObject();
  let biggestShoeSize = 0;
  let playerWithBiggestShoe = null;
  let rebounds = 0;

  for (let key in object) {
    const team = object[key];
    const players = team.players;

    for (let playerName in players) {
      const player = players[playerName];

      if (player.shoe > biggestShoeSize) {
        biggestShoeSize = player.shoe;
        playerWithBiggestShoe = playerName;
        rebounds = player.rebounds;
      }
    }
  }
  return rebounds;
}

function winningTeam() {
  const object = gameObject();
  let highestPoints = 0;
  let winner = "";

  for (let key in object) {
    const team = object[key];
    let teamPoints = 0;

    for (let playerName in team.players) {
      teamPoints += team.players[playerName].points;
    }

    if (teamPoints > highestPoints) {
      highestPoints = teamPoints;
      winner = team.teamName;
    }
  }

  return winner;
}


function playerWithLongestName() {
  const object = gameObject();
  let longestName = "";

  for (let key in object) {
    const players = object[key].players;

    for (let playerName in players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  }

  return longestName;
}



function doesLongNameStealATon() {
  const object = gameObject();
  const longestName = playerWithLongestName();
  let mostSteals = 0;
  let topThief = "";

  for (let key in object) {
    const players = object[key].players;

    for (let playerName in players) {
      const steals = players[playerName].steals;
      if (steals > mostSteals) {
        mostSteals = steals;
        topThief = playerName;
      }
    }
  }

  return longestName === topThief;
}
