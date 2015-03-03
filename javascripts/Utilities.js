(function () {
    Amp.Utilities = function() {

        function isInteger(int) {
            return int % 1 === 0;
        }

        return {
            isInteger: isInteger
        }
    }
})();