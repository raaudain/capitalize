// Write a function that accepts a string.
// The function should capitalize the first letter of each word in the string then return the capitalized string.


// Solution #1
function capitalize(str){
  const words = [];

  for (let word of str.split(" ")){
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  return words.join(" ");
}


// capitalize("a short sentence");
// capitalize("a lazy fox");
capitalize("look, it is working!");