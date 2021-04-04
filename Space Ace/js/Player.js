class Player {

  constructor(){

    this.index = null;
    this.distance = 0;
    this.name = null;

  }

  getCount(){

    var playerCountRef = database.ref('playerCount');

    playerCountRef.on("value",(data)=>{

      playerCount = data.val();

    })
  }

  updateCount(count){

    database.ref('/').update({

      playerCount: count

    });
  }

  updatePlayerDetail(name, playerCount){

    var playerIndex = "players/player" + playerCount;

    database.ref(playerIndex).set({

      name : this.name,
     
    });
  }

  static getPlayerInfo(){

    var playerInfoRef = database.ref('players');

    playerInfoRef.on("value",(data)=>{

      allPlayers = data.val();

    })
  }

  updatePlayerHealth(playerIndex, healthValue){

    database.ref(playerIndex).set({

      health : healthValue,
     
    });

  }

  updatePlayerChance(playerIndex, chanceValue){

    database.ref(playerIndex).set({

      chance : chanceValue,
     
    });

  }

}
