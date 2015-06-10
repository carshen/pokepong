// TODO: eliminate pollution of global namespace so I can refactor better parameter names for this
function ObjectsRenderer(playerUI, opponentUI, pongBallUI) {
  this.playerUI = playerUI;
  this.opponentUI = opponentUI; 
  this.pongBallUI = pongBallUI;

  this.render = function() {
    this.playerUI.render();
    this.opponentUI.render();
    this.pongBallUI.render();
  }
}
