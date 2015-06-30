var currentclass;
var archerlevel=1
var saberlevel=1
var archer=false;
var saber=false;
var archerexp=0;
var saberexp=0;
var archermaxexp;
var sabermaxexp;
var currentexp;
var maxcurrentexp;
var currentlevel;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var classheader = new android.widget.TextView(ctx);
var classnext = new android.widget.TextView(ctx);
var classclose = new android.widget.TextView(ctx);
var class1 =new android.widget.TextView(ctx);
var class2 =new android.widget.TextView(ctx);
var class3 = new android.widget.TextView(ctx);
var class4 =new android.widget.TextView(ctx);
var class5 = new android.widget.TextView(ctx);
var currentclassGUI =new android.widget.TextView(ctx);
var currentlevelGUI =new android.widget.TextView(ctx);
var currentexpGUI =new android.widget.TextView(ctx);
var changeclass =new android.widget.TextView(ctx);
var selectGUI;
var infoGUI;
var showclass=0;
var hided=false;

function newLevel() {
    loadStats();
    dismissselect();
    dismissinfo();
makeselectGUI();
makeInfoGUI();
}

function loadStats() {
    showclass=1;
    currentclass=ModPE.readData("lastclass");
    if(ModPE.readData("levelarcher")>0) {
    archerlevel=ModPE.readData("levelarcher");
    }
    if(ModPE.readData("levelsaber")>0) {
    saberlevel=ModPE.readData("levelsaber");
    }
    if(ModPE.readData("xparcher")>0) {
    archerexp=ModPE.readData("xparcher");
    }
    if(ModPE.readData("xpsaber")>0) {
    saberexp=ModPE.readData("xpsaber");
    }
    archermaxexp=Math.round(archerlevel+5*30);
    sabermaxexp=Math.round(saberlevel+5*30);
    if(!currentclass) {
        currentclass="Archer";
    }
}

function modTick() {
    if(showclass==1) {
        if(!hided) {
        showInfo();
        }
    }
    if(showclass==2) {
        showSelect();
    }
    checklevel();
}

function dismissselect() {
    ctx.runOnUiThread(new java.lang.Runnable(){
        run: function(){
            if(selectGUI!=null) {
                selectGUI.dismiss();
                selectGUI=null;
                class1.getParent().removeView(class1);
                class2.getParent().removeView(class2);
                //class3.getParent().removeView(class3);
                //class4.getParent().removeView(class4);
                //class5.getParent().removeView(class5);
                //class6.getParent().removeView(class6);
                classheader.getParent().removeView(classheader);
                //classnext.getParent().removeView(classnext);
                classclose.getParent().removeView(classclose);
            }
        }
    });
}

function makeInfoGUI() {
    ctx.runOnUiThread(new java.lang.Runnable(){
        run: function(){
            try{
                infoGUI=new android.widget.PopupWindow();
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(android.widget.LinearLayout.VERTICAL);
                layout.setGravity(android.view.Gravity.LEFT);
                layout.addView(currentclassGUI);
                layout.addView(currentlevelGUI);
                layout.addView(currentexpGUI);
                layout.addView(changeclass);
                infoGUI.setContentView(layout);
                infoGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                infoGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                infoGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.LEFT, 0, -55);
            }catch(e) {
                print(e)
            }
        }
    })
}

function showInfo() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            currentclassGUI.setText("Class : " + currentclass);
            currentclassGUI.setTextColor(android.graphics.Color.GREEN);
            currentclassGUI.setTextSize(18);
            if(currentclass=="Archer") {
                currentexp=archerexp;
                maxcurrentexp=archermaxexp;
                currentlevel=archerlevel;
            }
            if(currentclass=="Saber") {
                currentexp=saberexp;
                maxcurrentexp=sabermaxexp;
                currentlevel=saberlevel;
            }
            currentlevelGUI.setText("Level : " + currentlevel);
            currentlevelGUI.setTextColor(android.graphics.Color.GREEN);
            currentlevelGUI.setTextSize(18);
            var convert = currentexp / maxcurrentexp;
            var percent = convert * 100;
            currentexpGUI.setText("Exp : " + Math.round(percent) + "% " + "["+currentexp+"/"+maxcurrentexp+"]");
            currentexpGUI.setTextSize(18);
            currentexpGUI.setTextColor(android.graphics.Color.GREEN);
            changeclass.setText("Change Class");
            changeclass.setTextSize(18);
            changeclass.setTextColor(android.graphics.Color.RED)
            changeclass.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(viewarg) {
                    showclass=2;
                    if(selectGUI==null) {
                    makeselectGUI();
                    }
                    dismissinfo();
                }
            });
        }
    }));
}

function dismissinfo() {
    ctx.runOnUiThread(new java.lang.Runnable(){
        run: function(){
            if(infoGUI!=null) {
                infoGUI.dismiss();
                infoGUI=null;
                currentclassGUI.getParent().removeView(currentclassGUI);
                currentlevelGUI.getParent().removeView(currentlevelGUI);
                currentexpGUI.getParent().removeView(currentexpGUI);
                changeclass.getParent().removeView(changeclass);
            }
        }
    });
}

function makeselectGUI() {
    ctx.runOnUiThread(new java.lang.Runnable(){
        run: function(){
            try{
                selectGUI=new android.widget.PopupWindow();
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(android.widget.LinearLayout.VERTICAL);
                layout.setGravity(android.view.Gravity.LEFT);
                layout.addView(classheader);
                layout.addView(class1);
                layout.addView(class2);
                layout.addView(classclose);
                selectGUI.setContentView(layout);
                selectGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                selectGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                selectGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.LEFT, 0, -55);
            }catch(e) {
                print(e)
            }
        }
    })
}

function showSelect() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            classheader.setText("Showing page 1 of 1");
            classheader.setTextColor(android.graphics.Color.GREEN);
            classheader.setTextSize(20);
            class1.setText("1. Archer " +"["+archerlevel+"]");
            class1.setTextColor(android.graphics.Color.GREEN);
            class1.setTextSize(18);
            class2.setText("2. Saber " +"["+saberlevel+"]");
            class2.setTextColor(android.graphics.Color.GREEN);
            class2.setTextSize(18);
            classclose.setText("Close");
            classclose.setTextSize(18);
            classclose.setTextColor(android.graphics.Color.RED)
            classclose.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(viewarg) {
                    dismissselect();
                    if(infoGUI==null) {
                    makeInfoGUI();
                    }
                    showclass=1;
                }
            })
            class1.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(viewarg) {
                    if(currentclass!="Archer") {
                        clientMessage("Selected class : Archer")
                        currentclass="Archer"
                    } else {
                        clientMessage("Your current class is Archer")
                    }
                    dismissselect();
                    if(infoGUI==null) {
                    makeInfoGUI();
                    }
                    showclass=1;
                }
            })
            class2.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(viewarg) {
                    if(currentclass!="Saber") {
                        clientMessage("Selected class : Saber");
                        currentclass="Saber"
                    } else {
                        clientMessage("Your current class is Saber")
                    }
                    dismissselect();
                    if(infoGUI==null) {
                    makeInfoGUI();
                    showclass=1;
                    }
                }
            });
        }
    }));
}

function leaveGame() {
    dismissinfo();
    dismissselect();
    savestats();
    showclass=0;
}

function savestats() {
    ModPE.saveData("lastclass",currentclass);
    ModPE.saveData("levelarcher",archerlevel);
    ModPE.saveData("levelsaber",saberlevel);
    ModPE.saveData("xparcher",archerexp);
    ModPE.saveData("xpsaber",saberexp);
}
function procCmd(cmd) {
    var c=cmd.split(" ");
    if(c[0]=="hide") {
        preventDefault();
        if(hided) {
            hided=false
            makeInfoGUI();
        } else {
            hided=true;
            dismissinfo();
        }
    }
}
function deathHook(a,v) {
    if(a==getPlayerEnt()) {
        var rndexp;
        if(Entity.getEntityTypeId(v)==32) {
            rndexp = Math.floor(Math.random()*(100)+(70))
        }
        if(Entity.getEntityTypeId(v)==33) {
            rndexp = Math.floor(Math.random()*(140)+(95))
        }
        if(Entity.getEntityTypeId(v)==34) {
            rndexp = Math.floor(Math.random()*(110)+(95))
        }
        if(Entity.getEntityTypeId(v)==35) {
            rndexp = Math.floor(Math.random()*(90)+(70))
        }
        if(Entity.getEntityTypeId(v)==36) {
            rndexp = Math.floor(Math.random()*(200)+(140))
        }
        if(Entity.getEntityTypeId(v)==37) {
            rndexp = Math.floor(Math.random()*(60)+(40))
        }
        if(Entity.getEntityTypeId(v)==38) {
            rndexp = Math.floor(Math.random()*(150)+(100))
        }
        if(Entity.getEntityTypeId(v)==39) {
            rndexp = Math.floor(Math.random()*(40)+(20))
        }
        if(Entity.getEntityTypeId(v)==40) {
            rndexp = Math.floor(Math.random()*(130)+(95))
        }
        if(Entity.getEntityTypeId(v)==41) {
            rndexp = Math.floor(Math.random()*(300)+(200))
        }
        if(Entity.getEntityTypeId(v)==42) {
            rndexp = Math.floor(Math.random()*(80)+(60));
        }
clientMessage(rndexp)
        if(Level.getGameMode()==0) {
            if(currentclass=="Archer") {
                archerexp = parseInt(archerexp+rndexp)
            }
            if(currentclass=="Saber") {
                saberexp = parseInt(saberexp+rndexp)
            }
        }
    }
}

function checklevel() {
    if(currentclass=="Archer") {
        if(archerexp>=archermaxexp) {
            var sisa = parseInt(archerexp-archermaxexp);
            archerlevel = parseInt(archerlevel+1);
            archerexp = parseInt(sisa);
            archermaxexp = parseInt(Math.round(archerlevel+5*30))
            ModPE.showTipMessage("Level Up !")
        }
    }
    if(currentclass=="Saber") {
        if(saberexp>=sabermaxexp) {
            var sisa = parseInt(saberxp-sabermaxexp);
            saberlevel = parseInt(saberlevel+1);
            saberexp = parseInt(sisa);
            sabermaxexp = parseInt(Math.round(saberlevel+5*30))
            ModPE.showTipMessage("Level Up !")
        }
    }
}
