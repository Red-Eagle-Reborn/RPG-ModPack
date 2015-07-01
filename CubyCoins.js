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
  var d = getTile(x,y,z);
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

function procCmd(cmd) {
  var c = cmd.split(" ");
  if(cmd == "shop") {
    if(!c[1]) {
      clientMessage(" /shop buy <number> <amount");
      clientMessage(" /shop buy 1 5");
      clientMessage("Shop 1/69");
      clientMessage("1.Apple 20c");
      clientMessage("2.Steak 30c");
    }
    if(c[1]) {
      if(c[1] == "1") {
        clientMessage("3.Diamond Sword 3g 25s 80c");
      }
      if(c[1] == "buy") {
        if(c[2]) {
          if(c[2] == "3") {
            if(goldCuby < 3) {
              clientMessage("Dont Have Enough Gold");
            }
            if(goldCuby >= 3) {
              if(silverCuby < 25) {
                if(goldCuby >= 4) {
                  goldCuby--;
                  silverCuby+=100;
                  if(copperCuby >= 80) {
                    silverCuby -= 25;
                    copperCuby -= 80;
                    goldCuby -= 3;
                    addItemInventory(267,1,0);
                  }
                  if(copperCuby < 80) {
                    silverCuby --;
                    copperCuby +=100;
                    addItemInventory(267,1,0);
                    copperCuby -= 80;
                  }
                }
              }
              if(silverCuby >= 25) {
                if(copperCuby >= 80) {
                  silverCuby -= 25;
                  copperCuby -= 80;
                  goldCuby -= 3;
                  addItemInventory(267,1,0);
                }
                if(copperCuby < 80) {
                  silverCuby--;
                  copperCuby += 100;
                  addItemInventory(267,1,0);
                }
              }
            }
          }
        }
      }
    }
  }
}

// Implemented Feature
/*
function buy(id,data,iName,gPrice,sPrice,cPrice) {
  if(goldCuby >= gPrice) {
    if(silverCuby >= sPrice) {
      if(copperCuby < cPrice) {
        if(silverCuby > sPrice) {
          silverCuby--;
          silverCuby -= sPrice;
          goldCuby -= gPrice;
          addItemInventory(id,data,1);
        }
        if(silverCuby < sPrice) {
          errM();
        }
      }
      if(copperCuby >= cPrice) {
        copperCuby -= cPrice
        silverCuby -= sPrice;
        goldCuby -= gPrice;
        addItemInventory(id,data,1);
        bc(iName,gPrice,sPrice,cPrice);
      }
    }
  }
  if(goldPrice < gPrice) {
    errM();
  }
}

errM = function() {
  clientMessage("You Don't have Enough Money");
}

bc = function(msg,gg,ss,cc) {
  clientMessage("[CubyShop] You Bought a " + msg + "For " + gg + "g " + ss + "s " + cc + "c");
}
*/

