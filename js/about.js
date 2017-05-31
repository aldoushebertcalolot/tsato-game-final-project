aboutGame={
	 create:function(){
	 	// game.stage.backgroundColor="#ff5";
	 	      aboutbg = game.add.sprite(0,0,"aboutbg");
	 	     devs = game.add.text(100, 190, 'This game is final project for Game Development', {font: '40px serif', fill: 'black'}); 
             namesText = game.add.text(200, 500, 'DANIELLA MAE FERNANDEZ', {font: '40px serif', fill: 'black'}); 
             dev = game.add.text(450, 300, 'Developers', {font: '40px serif', fill: 'green'}); 
            nameText = game.add.text(200, 400, 'ALDOUS HERBERT O. CALOLOT', {font: '40px serif', fill: 'black'}); 

            back2 = game.add.button(30,30,"back2",this.back);
	 },
	 update:function(){
	 	 
	 },
     back:function(){
      game.state.start("menuGame");
     },
}
 