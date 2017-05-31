menuGame={
	create:function(){
		    

              bg_menu = game.add.sprite(0,0,"bg_menu");
              bg_menu.scale .x =1; 
              bg_menu.scale .y =1.3; 
 		     laro = game.add.button(410,300,"laro",this.laro);
		     NG = game.add.button(410,600,"NG",this.NG);
             help = game.add.button(410,450,"help",this.help);

            


	},
	update:function(){
		   
	},
	laro:function(){
		game.state.start("playGame");
	},
	NG:function(){
     game.state.start("aboutGame");
	},
	help:function(){
       game.state.start("winGame");
	},
}


 