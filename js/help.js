winGame={
	create:function () {
		//game.stage.backgroundColor="#ff5";

		helpbg = game.add.sprite(0,0,"helpbg");
		 helpText = game.add.text(200, 300, 'How to play tsato', {font: '40px serif', fill: 'black'}); 
         help2Text = game.add.text(200, 350, 'You need to catch a wooden stick to get a score', {font: '40px serif', fill: 'black'}); 
         help3Text = game.add.text(200, 400, ' avoid the the burning stick', {font: '40px serif', fill: 'black'}); 

         back = game.add.button(10,10,"back",this.back);
	},
	update:function(){
	},
	back:function(){
   	     game.state.start("menuGame");
   },

}

