preloadGame={
  preload:function() {
    game.load.image("plax","img/platform1.png");
    game.load.image("pla1","img/platform.png");
    game.load.spritesheet("kal","img/kalaban.png",50,70);
    game.load.spritesheet("hero","img/bida.png",50,70);
     game.load.image("pla2","img/platform.png");
      game.load.image("pla3","img/platform.png");
    game.load.image("pla4","img/platform.png");
     game.load.image("pla","img/ground.png");
      game.load.image("taas","img/nat.png");
        game.load.image("stand","img/stand.png");
        game.load.spritesheet("diamond","img/yuma.png",50,50);
          game.load.spritesheet("wood","img/fly.png",50,50);
        game.load.spritesheet("tree","img/pape.png",200,88);
          game.load.image("bg","img/bg.png");
           game.load.spritesheet("dia","img/yuma.png",50,50);
            game.load.image('pause','img/pause.png');
             game.load.image('sound','img/pause.png');
                  game.load.spritesheet("help","img/help.png");
                  // game.load.spritesheet("yep","img/back.png");
                   game.load.spritesheet("back","img/back.png");
                    game.load.spritesheet("back2","img/back.png");
                  game.load.spritesheet("laro","img/play.png");
                   game.load.spritesheet("yap","img/restart.png");
                  game.load.spritesheet("NG","img/about.png");
                   game.load.audio('bgMusic', 'audio/backg.mp3');
                   game.load.audio('yay', 'audio/getstick.mp3');
                   // game.load.audio('boo', 'audio/ouch.mp3');
                    game.load.spritesheet('buttonhorizontals', 'img/lefts.png',150,100);
                    game.load.spritesheet('buttonhorizontal', 'img/right.png',150,100);
                     game.load.spritesheet('buttonjump', 'img/ups.png',150,100);
                     game.load.spritesheet('yoho', 'img/lod.png',50,70);
                      game.load.spritesheet('oho', 'img/lad.png',50,70);
                      game.load.image('floor','img/floor.png');
                       game.load.image('bg_menu','img/ito.png');
                       game.load.image('aboutbg','img/ab.png');
                       game.load.image('helpbg','img/ab.png');
                       game.load.image('returnbg','img/ab.png');

         

  },
  create:function() {
    game.state.start("menuGame");
  },
}







