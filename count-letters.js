// objective: return all the indeces of a letter in a string passed into the function.
function countLetters(string) {
    // make an empty object that we'll fill
    var result = {};
    // for each of the characters in the string
    for (var i = 0; i < string.length; i++) {
        // initialize letter as the first letter of the string
        var letter = string[i];
        // initilaize a newChar variable to hold the value of letter
        var newChar = letter;
        // ignore spaces in the passed-in string
        if(letter != " "){
            // if the letter has already been seen
            if (!result.hasOwnProperty(letter)) {
                // create a property that holds an array
                result[newChar]=[];
                // push the new index number into the array
                result[newChar].push(i);
            } else {
                // push the index number into the array
                result[newChar].push(i);
            }
        }
    }
    // return the object
    return result;
  }
console.log(countLetters("lighthouse in the house"));



