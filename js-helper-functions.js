//get groups of numbers from an array
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