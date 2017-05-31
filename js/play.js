playGame={
	 create:function() {
    

    floor = game.add.sprite(0,600,"floor");
    bg = game.add.sprite(0,0,"bg");
    yoho = game.add.sprite(560,500,"yoho");
     yoho.animations.add('galan',[0,1],4,true);
     yoho.animations.play('galan');
      oho = game.add.sprite(590,500,"oho");
     oho.animations.add('galan',[0,1],4,true);
     oho.animations.play('galan');
      tree = game.add.sprite(660,500,"tree");
     tree.animations.add('galaw',[0,1],4,true);
     tree.animations.play('galaw');
   player = game.add.sprite(100,500,"hero");
   

    

    labelScore = game.add.text(100, 30, 'Score:0', {font: '40px serif', fill: 'black'}); 
 
     labelhi = game.add.text(500, 30, "Hi-Score: " +tsatoGame.getScore(),{font: '40px serif', fill: 'black'}); 
   

      tsatoGame.createDiamonds(4000);
     diamond = game.add.group();
     diamond.enableBody = true; 

       tsatoGame. createWoods(3000);
     wood= game.add.group();
     wood.enableBody = true; 

    tsatoGame.createDias(5000);
     dia = game.add.group();
     dia.enableBody = true; 

        yaymusic = game.add.audio('yay');
        boomusic = game.add.audio('boo');
        bgmusic = game.add.audio('bgMusic');
        bgmusic.play();
        tsatoGame.loopAudio(4000);
 

      
   kal = game.add.sprite(950,490,"kal");
    kal.animations.add('hampas',[0,1,2],7,true);
    kal.animations.play('hampas');
     kal = game.add.sprite(950,260,"kal");
    kal.animations.add('hampas',[0,1,2],7,true);
    kal.animations.play('hampas');
     kal = game.add.sprite(950,380,"kal");
    kal.animations.add('hampas',[0,1,2],6,true);
    kal.animations.play('hampas');
     kal = game.add.sprite(950,130,"kal");
    kal.animations.add('hampas',[0,1,2],6,true);
    kal.animations.play('hampas');

    stand= game.add.sprite(250,100,"stand");
     game.physics.arcade.enable(stand);
      stand.body.immovable = true; 
      taas= game.add.sprite(0,100,"taas");
     game.physics.arcade.enable(taas);
      taas.body.immovable = true; 

  
      pla= game.add.sprite(0,590,"pla");
     game.physics.arcade.enable(pla);
      pla.body.immovable = true; 

   platform = game.add.sprite(940,560,"plax");
      game.physics.arcade.enable(platform);
     platform.body.immovable = true;
    platform = game.add.sprite(940,450,"plax");
      game.physics.arcade.enable(platform);
    platform.body.immovable = true;
    platform = game.add.sprite(940,330,"plax");
     game.physics.arcade.enable(platform);
    platform.body.immovable = true;
     platform = game.add.sprite(940,200,"plax");
      game.physics.arcade.enable(platform);
     platform.body.immovable = true;
     pla1 = game.add.sprite(25,550,"pla1");
      game.physics.arcade.enable(pla1);
     pla1.body.immovable = true;
   pla2= game.add.sprite(25,340,"pla2");
      game.physics.arcade.enable(pla2);
     pla2.body.immovable = true;
    pla3= game.add.sprite(160,440,"pla3");
     game.physics.arcade.enable(pla3);
     pla3.body.immovable = true;
    pla4= game.add.sprite(160,230,"pla4");
     game.physics.arcade.enable(pla4);
      pla4.body.immovable = true; 

       buttonjump = game.add.button(800, 640, 'buttonjump');  
    buttonjump.events.onInputOver.add(function(){jump=true;});
    buttonjump.events.onInputOut.add(function(){jump=false;});
    buttonjump.events.onInputDown.add(function(){jump=true;});
    buttonjump.events.onInputUp.add(function(){jump=false;});

    buttonleft = game.add.button(50, 640, 'buttonhorizontals');
    buttonleft.events.onInputOver.add(function(){left=true;});
    buttonleft.events.onInputOut.add(function(){left=false;});
    buttonleft.events.onInputDown.add(function(){left=true;});
    buttonleft.events.onInputUp.add(function(){left=false;});

    buttonright = game.add.button(250, 640, 'buttonhorizontal');
    buttonright.events.onInputOver.add(function(){right=true;});
    buttonright.events.onInputOut.add(function(){right=false;});
    buttonright.events.onInputDown.add(function(){right=true;});
    buttonright.events.onInputUp.add(function(){right=false;});

    player.animations.add('left',[2,3],7,true);
    player.animations.add('right',[0,1],7,true);
       
     

      keyboard = game.input.keyboard.createCursorKeys();
      game.physics.arcade.enable(player);  
       player.body.collideWorldBounds = true;
       player.body.gravity.y= 1000;

       pause_label = game.add.image(900, 20, 'pause');
    
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        
        game.paused = true;
    });

    game.input.onDown.add(unpause, self);    
    
     function unpause(event){
       
        if(game.paused){
          game.paused = false;
            }
       
        
    };
      
},
update:function() {
	
     game.physics.arcade.overlap(player,diamond,tsatoGame.killHero);
      game.physics.arcade.overlap(player,dia,tsatoGame.killHero);
      game.physics.arcade.overlap(player,wood,tsatoGame.killWood);
     game.physics.arcade.collide(player,stand);
    game.physics.arcade.collide(player,taas);
     game.physics.arcade.collide(player,pla);
     game.physics.arcade.collide(player,pla1);
     game.physics.arcade.collide(player,pla2);
     game.physics.arcade.collide(player,pla3);
     game.physics.arcade.collide(player,pla4);
    

    
      if (tsatoGame.getScore()<=x){
         tsatoGame.saveScore(x);
        labelhi.text = "Hi-Score: "+x;
    }

   
        if (left && !duck) {
       
        player.body.velocity.x = -450;
        player.animations.play('left');

    }
    else if (right && !duck) {
        
      player.body.velocity.x = 450;
        player.animations.play('right');
    
   
    }
     else if (jump && !duck) {
        
       player.body.velocity.y = -440;
       
       
    }
   else
    {
        
        player.animations.stop();
        player.body.velocity.x = 0;
      
       }
    },
}
var tsatoGame = function(){
    "use strict";
    return { 



 killHero:function(player,diamond,dia){
        boomusic.play();
    player.kill();


    if(player.kill){
    game.state.start("retur");
    }
},
  
        loopAudio:function(time){
         setInterval (function (){
           bgmusic.play();
         },time);
        },
       
       
 saveScore:function(score){
    localStorage.setItem("gameData",score);
},


 getScore:function(){
    return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:
    localStorage.getItem("gameData");
     
},
 killWood:function(player, wood){
    wood.kill();
   x = x+1;
     labelScore.text = "Score: "+x;
        yaymusic.play();
},
 createDiamonds:function(time){
    setInterval(function(){
        diamonds = diamond.create(850,250,"diamond");
        diamonds.body.gravity.x= -200;
        var scale = Math.random();
         diamonds.animations.add('spinning',[0,1,2,3,4,5,6,7],9,true);
        diamonds.animations.play('spinning');
        diamonds = diamond.create(850,470,"diamond");
        diamonds.body.gravity.x= -200;
        var scale = Math.random();
         diamonds.animations.add('spinning',[0,1,2,3,4,5,6,7],9,true);
        diamonds.animations.play('spinning');
    },time);
 },
  createDias:function(time){
    setInterval(function(){
        dias = dia.create(850,150,"dia");
        dias.body.gravity.x= -200;
        var scale = Math.random();
         dias.animations.add('spinning',[0,1,2,3,4,5,6,7],10,true);
        dias.animations.play('spinning');
        dias = dia.create(850,370,"dia");
        dias.body.gravity.x= -200;
        var scale = Math.random();
         dias.animations.add('spinning',[0,1,2,3,4,5,6,7],10,true);
        dias.animations.play('spinning');
    },time);
 },
  createWoods:function(time){
    setInterval(function(){
         woods = wood.create(850,150,"wood");
         woods.body.gravity.x= -200;
        var scale = Math.random();
          woods.animations.add('spinning',[0,1,2,3],10,true);
         woods.animations.play('spinning');
         woods = wood.create(850,370,"wood");
         woods.body.gravity.x= -200;
        var scale = Math.random();
          woods.animations.add('spinning',[0,1,2,3],10,true);
         woods.animations.play('spinning');
    },time);
 }
    }
    }();


	