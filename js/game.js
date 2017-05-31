var player, keyboard, gameover,restartButton;
var kal,pla,pla1,pla2,pla3,pla4,platform,taas,diamonds,diamond,stand,wood,woods,tree,score = 0, labelhi, scoreInterval,score,retrieveBest,dia,dias,restartButton,startButton,titlepage,startText;
var getScore;
var bgmusic, loopAudio, boomusic, yaymusic;
var nameText,namesText;
var x = 0;
var nextJump = 0;
var left=false;
var right=false;
var duck= false;
var jump=false;
var restartB;
var help2Text;
var help3Text;
var devs ;
var  dev;
var gameover;
var game = new Phaser.Game(1024,750, Phaser.CANVAS, '');

game.state.add('bootGame', bootGame);
game.state.add('preloadGame', preloadGame);
game.state.add('menuGame', menuGame);
game.state.add('playGame', playGame);
game.state.add('winGame', winGame);
game.state.add('aboutGame', aboutGame);
game.state.add('retur',retur);



game.state.start("bootGame");