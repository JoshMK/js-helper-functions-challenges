//getGroupedNumbersFromArray - returns the number of grouped numbers (pairs by default) from an array
function getGroupedNumbersFromArray(pairArray, numGroupedBy = 2) {
let numMatches,
numGroupedMatches = 0;
//get unique entries from array
const uniqueNumbers = Array.from(new Set(pairArray));
uniqueNumbers.forEach(number => {
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

//getNumberMatchingStringsByQuery - returns an array containing a number for each time the checked array's string matched an array of queries
function getNumberMatchingStringsByQuery(stringsArray, queriesArray) {
    let numMatches = 0,
    matchesArray = [];
    //for each string query, compare it to the array of strings
    queriesArray.forEach(query => {
        for (let i = 0; i < stringsArray.length; i++) {
            if (query === stringsArray[i]) {
                numMatches += 1;
            }
        }
        //add matches to array and reset counter
        matchesArray.push(matches);
        matches = 0;
    });
    return matchesArray;
}