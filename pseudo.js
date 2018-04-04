// Assignment:
//
// Create a web-based solver for Boggle. Users should be able to enter their Boggle "board" into a web page and retrieve a list of matching words.
//
// You may use any publicly available language, libraries, tools, and information resources. We do ask that you come prepared to discuss what resources you used, and that the final result reflects your own work and thinking. When you're done, please send along the source code and a live URL where the app is hosted.
//
// The assignment is meant to take no more than 4 hours. If you find yourself running over, please don't kill yourself working on it -- just stop as soon as you can and let us know about how much time you spent on it.
//
// Some of the things we are interested in seeing:
//
// - How easy is it to understand or maintain the code?
// - How usable/pleasant is the interface? Might Boggle players actually want to use this app?
// - How performant is the solution? Are users having to wait a long time to see their results?
// - How scalable and versatile is the application? Could you plug in a different dictionary? Alphabet? Would it continue to perform well on a 5x5 or 6x6 board?
//
// In 4 hours, we certainly don't expect that anyone would be able to ace every one of the above, but we'd love to see a solution that shows off your strengths in some of the above areas and performs reasonably in the others.

// What can the user do, see, expect?

// user can enter their boggle board letters and retrieve a list of matching words

// in boggle words must be created using 3+ letters(condition)

 // user sees an input (or field to enter their boggle board letters) and submit button
 // input/fxn should accept enough characters for boggle boards that are bigger than 4x4

 // fxn should return a list of all possible words
 // find the possible paths for each letter from starting letter/position

// user expects a list of possible words, descending would be best order (pts.)

  // I need to loop through to iterate over each square on the board( to get each letter)
  // take the 2-d array(from the board) and concatinate into a 1-d array (may be helpful for itererating through the array )
  ex:
  ['P','A','T','S']
  ['E','F','G','K']
  ['O','I','E','C']
  ['G','N','T','R']
