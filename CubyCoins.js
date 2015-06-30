/*
  RPG Mod Pack- Cuby Coins
  Creator : REDevilLord & respectZ
*/

var copperCuby;
var silverCuby;
var goldCuby;

function deathHook(m,v) {
  if(m == getPlayerEnt()) {
    copperCuby = copperCuby + Math.floor(Math.random()*(100));
    var dd = Math.floor(Math.random()*(10));
    if(dd <= 7) {
      silverCuby++;
    }
    if(dd > 7) {
      goldCuby++;
    }
    if(copperCuby >= 100) {
      copperCuby = copperCuby - 100;
      silverCuby = silverCuby + 1;
    }
    if(silverCuby >= 100) {
      silverCuby = silverCuby - 100;
      goldCuby = goldCuby + 1;
    }
  }
}

function destroyBlock(x,y,z,side) {
  var d = getTile(x,y,z) {
    if(d == 1 || d == 4 || d == 14 || d == 15 || d == 16 || d == 56) {
      copperCuby = copperCuby + Math.floor(Math.random()*(100));
      var dd = Math.floor(Math.random()*(10));
      if(dd <= 7) {
        silverCuby++;
      }
      if(dd > 7) {
        goldCuby++;
      }
      if(copperCuby >= 100) {
        copperCuby = copperCuby - 100;
        silverCuby = silverCuby + 1;
      }
      if(silverCuby >= 100) {
        silverCuby = silverCuby - 100;
        goldCuby = goldCuby + 1;
      }
    }
  }
}

function procCmd(cmd) {
  var c = cmd.split(" ");
  if(cmd == "shop") {
    if(!c[1]) {
      clientMessage(" /shop buy <number> <amount");
      clientMessage(" /shop buy 1 5");
      clientMessage("Shop 1/69");
      clientMessage("1.Apple 20 Copper");
    }
  }
}
