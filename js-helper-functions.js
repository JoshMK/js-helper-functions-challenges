//getGroupedNumbersFromArray - returns the number of grouped numbers (pairs by default) from an array
function getGroupedNumbersFromArray(pairArray, numGroupedBy = 2) {
  let numMatches = 0;
  let numGroupedMatches = 0;
  //get unique entries from array
  const UNIQUE_NUMBERS = Array.from(new Set(pairArray));
  UNIQUE_NUMBERS.forEach((number) => {
    for (let i = 0; i < pairArray.length; i++) {
      if (pairArray[i] === number) {
        //tally each unique element
        numMatches += 1;
      }
    }
    //calculate the grouped numbers
    numGroupedMatches += Math.floor(numMatches / numGroupedBy);
    //reset the match tally for the next unique number
    numMatches = 0;
  });
  return numGroupedMatches;
}

//createObjectWithRemovedProperty - returns an object from an existing object with a specified property removed
function createObjectWithRemovedProperty(oldObj, prop) {
  let newObjMinusProp = { ...oldObj };
  if (newObjMinusProp.hasOwnProperty(prop)) {
    delete newObjMinusProp[prop];
  }
  return newObjMinusProp;
}

//getNumberofCharsFromRepeatedSubstring - returns the number of characters from the first n characters of a substring repeated n times
function getNumberofCharsFromRepeatedSubstring(string, n) {
  const CHAR = "a";
  let numChars = 0;
  let combinedCharString = string.repeat(n);
  const COMBINED_CHAR_SUBSTRING = combinedCharString.substring(0, n);
  for (const LETTER of COMBINED_CHAR_SUBSTRING) {
    if (LETTER === CHAR) {
      numChars++;
    }
  }
  return numChars;
}

//rotateArrayLeft - returns a new array with its contents shifted left n times
function rotateArrayLeft(array, n) {
  let newArray = array;
  for (let i = 0; i < n; i++) {
    let newArrayLastIndex = newArray.shift();
    newArray.push(newArrayLastIndex);
  }
  return newArray;
}

//rotateArrayLeft - returns a new array with its contents shifted left n times
function camelCase(sentence) {
  let sentenceArray = sentence.split(" ");
  sentenceArray.forEach((word, i) => {
    const NEW_FIRST_LETTER = word.charAt(0).toUpperCase();
    const REST_OF_WORD = word.substring(1);
    sentenceArray[i] = NEW_FIRST_LETTER + REST_OF_WORD;
  });
  return sentenceArray.join(" ");
}

function getConsecutiveNumbersFromArray(array, maxNumberGroup = 3) {
  let matches = 0;
  let uniqueNumbers = Array.from(new Set(array)); //get unique numbers
  for (let i = 0; i < uniqueNumbers.length; i++) {
    //compare each unique number to the array as a whole
    for (let j = 0; j < array.length; j++) {
      if (uniqueNumbers[i] === array[j]) {
        matches++;
        if (matches === maxNumberGroup) {
          return `${maxNumberGroup} consecutive numbers found at array index ${j}`;
        }
      } else {
        matches = 0;
      }
    }
    j = 0;
  }
  return "No consecutive numbers found.";
}
