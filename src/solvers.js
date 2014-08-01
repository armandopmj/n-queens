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

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution = board;
  var ri = 0;

  var findSolution = function(row) {
    if(row === n) {
      return board;
    }

    for(var ci = 0; ci < n; ci++) {
      board.togglePiece(row, ci);
      if( !board.hasAnyRooksConflicts() ) {
        var temp = findSolution(row+1);
        if( temp !== undefined ) {
          solution = temp;
          return solution;
        }
      }
      board.togglePiece(row, ci);
    }
  }
  findSolution(ri);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  var ri = 0;

  var findSolution = function(row) {
    if(row === n) {
      solutionCount++;
      return;
    }

    for(var ci = 0; ci < n; ci++) {
      board.togglePiece(row, ci);
      if( !board.hasAnyRooksConflicts() ) {
        findSolution(row+1);
      }
      board.togglePiece(row, ci);
    }
  }
  findSolution(ri);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution = board;
  var ri = 0;

  var findSolution = function(row) {
    if(row === n) {
      return board;
    }

    for(var ci = 0; ci < n; ci++) {
      board.togglePiece(row, ci);
      if( !board.hasAnyQueensConflicts() ) {
        var temp = findSolution(row+1);
        if( temp !== undefined ) {
          solution = temp;
          return solution;
        }
      }
      board.togglePiece(row, ci);
    }
  }
  findSolution(ri);


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution.rows()));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  var ri = 0;

  var findSolution = function(row) {
    if(row === n) {
      solutionCount++;
      return;
    }

    for(var ci = 0; ci < n; ci++) {
      board.togglePiece(row, ci);
      if( !board.hasAnyQueensConflicts() ) {
        findSolution(row+1);
      }
      board.togglePiece(row, ci);
    }
  }
  findSolution(ri);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
