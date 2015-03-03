var ScoreBoard = function (currentScore) {
	this.currentScore = currentScore;
    console.log('ScoreBoard instance created');
};



ScoreBoard.prototype.addPoint = function() {
  this.currentScore = this.currentScore + 1;
  return this.currentScore;
  console.log(this.currentScore = this.currentScore + 1);
};

ScoreBoard.prototype.deductPoint = function() {
  this.currentScore = this.currentScore - 1;
  return this.currentScore;
  console.log(this.currentScore = this.currentScore - 1);
};

ScoreBoard.prototype.Getoutput = function(){
	var html = "<h1>Your Score is "  + this.currentScore + "</h1>"
    document.getElementById('score').innerHTML = html;
};	