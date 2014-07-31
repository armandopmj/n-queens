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
  var n = n, outcomes = [], filteredOutcomes = [], matricies = []; allzeros=[];

  for( var p = 0; p < n; p++ ) {
    var row = Array(n);
    for( var i = 0; i < n; i++ ){
      row[i] = 0;
    }
    row[p] = 1;
    filteredOutcomes.push( row );
  }

  for( var p = 0; p < n; p++ ) {
    allzeros.push(0)
  }
  // console.log("allzeros: ", allzeros)
  var counter = 0;
  var getMatrix = function(playedSoFar, roundsLeft) {
    if (roundsLeft === 0) matricies.push( playedSoFar );
    else {
      for (var i = 0; i < filteredOutcomes.length; i++) {
        var building = playedSoFar.concat( [ filteredOutcomes[i] ] );
        // console.log("building: ", building);
        if( building.length < n) {
          var semi_built = [];
          console.log( "building: ", building )
          console.log( "n - building.length: ", n - building.length )
          for( var i = 0; i < n - building.length; i++ ){
            semi_built = building.concat( [ allzeros ] );
          }
          console.log( "semi_built: ", semi_built );
          var board = new Board( semi_built );
          if( board.hasAnyRooksConflicts() ) continue;
        }
        else {
          var board = new Board( building );
          if( board.hasAnyRooksConflicts() ) continue;
        }
        getMatrix( building, roundsLeft-1 )
      counter++;
      if (counter === 300) debugger;
      }
    }
  };
  getMatrix([], n);
  console.log("Matrix ", matricies);
  console.log("Number of solutions for n of ", n, ": ", matricies.length );
  return matricies[0];
  // for( var i = 0; i < matricies.length; i++ ){
  //   var board = new Board(matricies[i]);
  //   if( !board.hasAnyRooksConflicts() ) {
  //     console.log('Single solution for ' + n + ' rooks:', JSON.stringify(matricies[i]));
  //     return matricies[i];
  //   }
  // }
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
