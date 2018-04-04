//  create an input that accepts string if 16 letters
// pull string from form an turn into an array
document.getElementById("checkDictionary").addEventListener("click", solve)

// check if a square #
let isSquare = function(n) {
  return n > 0 && Math.sqrt(n) % 1 === 0;
};
// Different approach to solution, did not use it for this app.
// this approach would accept any size board
// would need to use a different api/dictionary
// ****************** global vars **************
// let grid = [];
// let words = [];
//
// // *********************************************
// var makeGrid = function(boggleStr) {
//   let b = Math.sqrt(boggleStr.length);
//   let oldB = 0,
//     newB = b;
//   for (let i = 0; i < b; i++) {
//     // console.log("newB " +newB)
//     // console.log("oldB " +oldB)
//     grid.push(boggleStr.substring(oldB, newB).split(''));
//     oldB = newB;
//     newB += b;
//   }
// }
// ======================================================


function solve() {
  const boggleStr = document.getElementById("boggleBoard").value;
  // dictionary : http://api.codebox.org.uk/boggle/<letters>
  var dictionaryUrl = "https://api.codebox.org.uk/boggle/" + boggleStr;

  $.ajax({
    url: dictionaryUrl,
    success: function(response) {
      for (let r = 0; r < response.length; r++) {
        let sortedList = sortByLength(response);
        let word = (response[r]);

        let wordList = document.getElementById("wordSearchResults");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(word));
        wordList.appendChild(li);
        // console.log(response[r]);
        // console.log(response);
      }
    },
    error: function(r) {

      console.log(r);
    }
  });
  // sort by length (descending) longer words first
  function sortByLength(array) {
    // Return an array containing the same strings, ordered from shortest to longest

    var sortArray = [];

    sortArray = array.sort(function(a, b) {
      return (b.length - a.length);
    });

    console.log(sortArray);
  }

  // ===============================================================
  if (isSquare(boggleStr.length)) {
    // makeGrid(boggleStr);
    // attempt to traverse grid and map letter
    // findWord();
    // check for string entered
    // console.log(boggleStr);
    document.getElementById("boggleBoard").value = '';

  } else {

    alert("Incorrect Entry- not a Square!")
  }
}
