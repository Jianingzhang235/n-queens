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



window.findNRooksSolution = function (n, board) {
  // the final solution would be a nested array,so instead of undefined,
  // the initial value should be an empty array;

  var solution = [];

  var newBoard = new Board({
    'n': n
  });
  console.log(newBoard);

  function downTheTree(row) {
    for (let i = 0; i < n; i++) {
      newBoard.togglePiece(row, i);
      if (!newBoard.hasAnyRooksConflicts()) {
        return downTheTree(row + 1);
      } else {
        newBoard.togglePiece(row, i);
      }
    }
  };
  downTheTree(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  // return a number,finally will be n's factorial;
  //so the starting value should be 0 instead of undefined;
  var solutionCount = 0; //fixed;
  var newBoard = new Board({
    'n': n
  });

  function downTheTree(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (let i = 0; i < n; i++) {
      newBoard.togglePiece(row, i);
      if (!newBoard.hasAnyRooksConflicts()) {
        return downTheTree(row + 1);
      }
      newBoard.togglePiece(row, i);
    }
  };
  downTheTree(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = 0; //fixme
  var newBoard = new Board({
    'n': n
  });

  function downTheTree(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (let i = 0; i < n; i++) {
      newBoard.togglePiece(row, i);
      if (!newBoard.hasAnyQueensConflicts()) {
        return downTheTree(row + 1);
      }
      newBoard.togglePiece(row, i);
    }
  };
  downTheTree(0);


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};