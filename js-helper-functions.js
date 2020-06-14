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

//camelCase - returns a sentence with the first letters of each word capitalized
function titleCase(sentence) {
  let sentenceArray = sentence.split(" ");
  sentenceArray.forEach((word, i) => {
    const NEW_FIRST_LETTER = word.charAt(0).toUpperCase();
    const REST_OF_WORD = word.substring(1);
    sentenceArray[i] = NEW_FIRST_LETTER + REST_OF_WORD;
  });
  return sentenceArray.join(" ");
}

//getConsecutiveNumbersFromArray - returns the number of consecutive values by group number from an array
function getConsecutiveEntriesFromArray(array, maxNumberGroup = 3) {
  let matches = 0;
  let uniqueNumbers = Array.from(new Set(array)); //get unique values
  for (let i = 0; i < uniqueNumbers.length; i++) {
    //compare each unique value to the array as a whole
    for (let j = 0; j < array.length; j++) {
      if (uniqueNumbers[i] === array[j]) {
        matches++;
        if (matches === maxNumberGroup) {
          return `${maxNumberGroup} consecutive entries found at array index ${j}`;
        }
      } else {
        matches = 0;
      }
    }
    j = 0;
  }
  return "No consecutive entries found.";
}

//getAlternatingCharacters - returns the number of of alternative characters in a two character string
function getAlternatingCharactersFromString(string) {
  let chars = 0;
  for (let i = 0; i < string.length; i++) {
    if (i < string.length - 1 && string[i] === string[i + 1]) {
      chars += 1;
    }
  }
  return chars;
}

//fradulentActivityNotifications - returns a number of notifications depening on whether a user's expenditure over a period of days was double their median expenditure.
function fradulentActivityNotifications(expenditure, d) {
  let notifications = 0;
  //get subset of expenditure by days stored
  let trailingDays = expenditure.slice(0, d).sort((a, b) => (a > b ? 1 : -1));
  const MEDIAN = Math.floor(trailingDays.length / 2);
  for (let i = d; i < expenditure.length; i++) {
    if (expenditure[i] >= trailingDays[MEDIAN] * 2) {
      notifications++;
    }
    //remove last day from array subset, add new item and sort to obtain new median value
    trailingDays.shift();
    trailingDays.push([expenditure[i]]);
    trailingDays.sort((a, b) => (a > b ? 1 : -1));
  }
  return notifications;
}
