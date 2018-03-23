// this is the model
// it should NOT contain any html or css
var gradtracker = (function() {

  // this is the internal state of the model
  // no one can access this directly
  var catalog = {
    "CMPS 160": {
      description: "Databases",
      credits: 3.0,
      prereq: []
    },
    "CMPS 162": {
      description: "Programming",
      credits: 3.0,
      prereq: ["CMPS 160"]
    }
  };

  var schedule = {
    "SP 18": ["CMPS 160"],
    "ZU 18": []
  };

  function getCatalog() { //gets information on the schedule
    return catalog;
  }

  function getSchedule() { //gets information on the schedule
    return schedule;
  }

  function addCourse(term, course) { //adds course to the schedule
    schedule[term].push(course);
    notify();
  }






  // define the playing grid (2d array)
  var grid = [[null, null, null],
              [null, null, null],
              [null, null, null]];

  // keep track of the current move
  var current = "x";

  // make a move if allowed
  function makeMove(cell) {
    // we need to extract the x and y from the cell id
    // RxCy
    var x = Number(cell[1]); // this is the x in RxCy
    var y = Number(cell[3]); // this is the y in RxCy
    // check if the cell is empty
    if (grid[x][y] === null) {
      // play the move
      grid[x][y] = current;
      // alternate the player
      if (current === "x") {
        current = "o";
      }
      else {
        current = "x";
      }
      // notify all the listeners (which update the views)
      notify();
    }
  }

  // this function clears the grid
  function clearGrid() {
    // set all cells to null
    for (var r = 0; r < grid.length; r++) {
      for (var c = 0; c < grid[r].length; c++) {
        grid[r][c] = null;
      }
    }
    // notify all the listeners (which update the views)
    notify();
  }

  // store all the listeners
  // we have to call all of them if something changes
  var listeners = [];

  // this function registers/adds a listener
  function listen(cb) {
    // collect them in the listeners array
    listeners.push(cb);
  }

  // notify all listeners of a change to the grid
  function notify() {
    // iterate through the array and call the listen callback function
    for (var i = 0; i < listeners.length; i++) {
      // call the function
      listeners[i](grid);
    }
  }

  // all functionality is accessed through the methods below
  return {
    makeMove: makeMove,
    clearGrid: clearGrid,
    listen: listen,
    notify: notify,
    getSchedule: getSchedule,
    addCourse: addCourse,
    getCatalog: getCatalog
  };

})();
