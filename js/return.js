retur = {
	create:function(){
     // game.stage.backgroundColor="#ff5";
     returnbg = game.add.sprite(0,0,"returnbg");
      gameover = game.add.text(380,270, 'Game Over',{ font: '60px Serif', fill: 'black' });
       labelhi = game.add.text(380, 150, "HIGHSCORE: " +tsatoGame.getScore(),{font: '40px serif', fill: 'black'}); 
        yap = game.add.button(500,370,"yap",this.yap);




	},
	update:function(){
    
	},
  yap:function(){
       window.location.href=window.location.href;
     
}
}
     
         
      

  

	

