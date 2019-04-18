// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {
  window.Board = Backbone.Model.extend({
    initialize: function(params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log(
          "Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:"
        );
        console.log(
          "\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})",
          "color: blue;",
          "color: black;",
          "color: blue;",
          "color: black;",
          "color: grey;"
        );
        console.log(
          "\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])",
          "color: blue;",
          "color: black;",
          "color: blue;",
          "color: black;",
          "color: blue;",
          "color: black;",
          "color: blue;",
          "color: black;",
          "color: blue;",
          "color: black;",
          "color: blue;",
          "color: black;",
          "color: blue;",
          "color: black;",
          "color: blue;",
          "color: black;",
          "color: blue;",
          "color: black;",
          "color: blue;",
          "color: black;",
          "color: grey;"
        );
      } else if (params.hasOwnProperty("n")) {
        this.set(makeEmptyMatrix(this.get("n")));
      } else {
        this.set("n", params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get("n"))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = +!this.get(rowIndex)[colIndex];
      this.trigger("change");
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(
          this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)
        ) ||
        this.hasMinorDiagonalConflictAt(
          this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex)
        )
      );
    },

    hasAnyQueensConflicts: function() {
      return (
        this.hasAnyRooksConflicts() ||
        this.hasAnyMajorDiagonalConflicts() ||
        this.hasAnyMinorDiagonalConflicts()
      );
    },

    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex &&
        rowIndex < this.get("n") &&
        0 <= colIndex &&
        colIndex < this.get("n")
      );
    },

    /*
             _             _     _
         ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
        / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
        \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
        |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

     */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict

    hasRowConflictAt: function(rowIndex) {
      var regex = /1[0]*1/;
      return regex.test(this.rows()[rowIndex].join(""));
    },
    hasAnyRowConflicts: function() {
      return this.rows().reduce(
        (acc, cur, ind) => (acc === true ? true : this.hasRowConflictAt(ind)),
        false
      );
    },

    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
      var column = "";
      for (var x = 0; x < this.rows().length; x++) {
        column += this.rows()[x][colIndex];
      }

      var regex = /1[0]*1/;
      return regex.test(column);
    },
    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
      for (var y = 0; y < this.rows().length; y++) {
        if (this.hasColConflictAt(y)) {
          return true;
        }
      }
      return false;
    },

    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict
    hasMajorDiagonalConflictAt: function(index) {
      /**
       * row().length -index is number of iterations of rows across the top
       * if(index) is positive, (0,index)is start
       * if(index) is negative (Math.abs(index),0) is start
       * if(index) is positive, rows().length-index = number of iterations
       * if(index )is negative, rows(length)+index is number of iterations
       */
      for (var y = 0; y < this.rows().length-index; y++) {
        console.log(index)
      }
     for (var y = 0; y < this.rows() + index; ) {

     }
      return false;
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
      for (var x = 0; x < this.rows().length - 1; x++) {
        this.hasMajorDiagonalConflictAt(x);
      }
      for (var x = -1; x > -this.rows() + 1; x--) {
        this.hasMajorDiagonalConflictAt(x);
      }
      return false;
    },

    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
      return false; // fixme
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
      return false; // fixme
    },

    /*--------------------  End of Helper Functions  ---------------------*/
  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };
})();
