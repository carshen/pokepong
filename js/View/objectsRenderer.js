// TODO: eliminate pollution of global namespace so I can refactor better parameter names for this
function ObjectsRenderer(canvas, context, playerUI, opponentUI, pongBallUI) {
	this.canvas = canvas;
	this.context = context;
	this.playerUI = playerUI;
	this.opponentUI = opponentUI; 
	this.pongBallUI = pongBallUI;

	this.render = function() {
		this.playerUI.render();
		this.opponentUI.render();
		this.pongBallUI.render();
	}
}
