(function () {
    Amp.ScoreTracker = function() {
        var utils = new Amp.Utilities();

        var totalScore = 0;

        function init() {
            //init
            console.log('init');
        }


        /* @method setScore
         * @description Sets the current score
         * @param {int} Accepts integer param to set
         */

        function setScore(int) {
            if (!utils.isInteger(int)) {
                return;
            }

            //set the score to the int val
            totalScore = int;
        }


        function deductPoints(int) {
            if (!utils.isInteger(int)) {
                return;
            }

            totalScore = totalScore - int;
        }

        function getTotalScore() {
            return totalScore;
        }


        return {
            setScore: setScore,
            deductPoints: deductPoints,
            getTotalScore: getTotalScore,
            init: init
        }
    }
})();
