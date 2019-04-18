/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  // the final solution would be a nested array,so instead of undefined,
  // the initial value should be an empty array;
  var solution = [];
  // var newBoard = new Board;
  // // create a  n by n chessBoard;



  for (var x = 0; x < n; x++) { //n columns
    var rowIndArr = [];
    for (var y = 0; y < n; y++) { // n rows;
      rowIndArr[y] = 0;

    }
    solution[x] = rowIndArr;
  }

  for (var k = 0; k < n; k++) {
    for (var j = 0; j < n; j++) {
      if (k === j) {
        solution[k][j] = 1;
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  // return a number,finally will be n's factorial;
  //so the starting value should be 0 instead of undefined;
  var solutionCount = 0; //fixed;

  // use recursion //
  var rookFactorial = function (num) {
    if (num < 0) {
      return -1;
    } else if (num === 0) {
      return 1;
    } else {
      return (num * rookFactorial(num - 1));
    }
  };
  solutionCount = rookFactorial(n);



  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};