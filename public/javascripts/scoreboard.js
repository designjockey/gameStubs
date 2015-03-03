var ScoreBoard = function (currentScore) {
	this.currentScore = currentScore;
  console.log('ScoreBoard created');
};



ScoreBoard.prototype.addPoint = function() {
  console.log(this.currentScore = this.currentScore + 1);
};

ScoreBoard.prototype.deductPoint = function() {
  console.log(this.currentScore = this.currentScore - 1);
};