// traverse the grid to check for Neighbors
// function findWord(){
//   let history= [];
//
//   let word= [];
//   for( let i= 0; i< grid.length; i++){
//
//     for(let j = 0; j < grid.length; j++){
//       currentLetter = grid[i][j];
//       word.push(currentLetter)
//       history.push([[i,j]]);
//
//       // console.log(grid[i][j]);
//       console.log(word);
//       console.log(currentLetter);
//       console.log(history);
//       // console.log("letter[" + i + "][" + j +"] =" + currentLetter[j]);
//     }
//   }
// }


// recursive fxn
// choose start position
// check if neighbors can be visited
// define neighbors (offsets)
// let neighbors = [[-1,-1],[0,-1],[1,1],
//                  [-1,0],       [1,0],
//                  [-1,1], [0,1], [1,1]];
  //pick any neighbor(next tile)
  // put neighbor on stack
  // mark path to neighbor
//
// function BoggleSolver(grid){
//   this.grid = grid;
//
//   // results
//   let results = new Set([]);
//   console.log(results)
//
// // check currentPosition
// let letter = this.grid[col][row];
//   this.traverse = function (col, row){
//     // base case (at least 3 letters )
//     if(this.grid[col][row] ==  3){
//       // base case
//     }
//
//   }
// }

// function search(currentPosition, history){
//   // check if history.length >= 3 if so check if this string makes a word (dictionary/api)
//   // from currentPosition check for possible valid moves
//   let newHistory = history.concat(currentPosition)
//   //
// function checkNeighbors(currentPosition){
//
// }
// for (let neighbor in neighbors){
// // get newPosition for next moves(trie)
// }
//   search(newPosition);
// }
