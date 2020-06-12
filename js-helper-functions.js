//getGroupedNumbersFromArray - returns the number of grouped numbers (pairs by default) from an array
function getGroupedNumbersFromArray(pairArray, numGroupedBy = 2) {
    let numMatches = 0;
    let numGroupedMatches = 0;
    //get unique entries from array
    const UNIQUE_NUMBERS = Array.from(new Set(pairArray));
    UNIQUE_NUMBERS.forEach(number => {
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
    let newObjMinusProp = {...oldObj};
    if (newObjMinusProp.hasOwnProperty(prop)) {
        delete newObjMinusProp[prop];        
    }
    return newObjMinusProp;
}

//getNumberofCharsFromRepeatedSubstring - returns the number of characters from the first n characters of a substring repeated n times
function getNumberofCharsFromRepeatedSubstring(string, n) {
    const CHAR = 'a';
    let numChars = 0;
    let combinedCharString = "";
    for (let i = 0; i < n; i++) {
        combinedCharString += string;
    }
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
    let sentenceArray = sentence.split(' ');
    sentenceArray.forEach((word, i) => {
        const NEW_FIRST_LETTER = word.charAt(0).toUpperCase();
        const REST_OF_WORD = word.substring(1);
        sentenceArray[i] = NEW_FIRST_LETTER + REST_OF_WORD;
    });
    return sentenceArray.join(' ');
}
    