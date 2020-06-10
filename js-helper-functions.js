//getGroupedNumbersFromArray - returns the number of grouped numbers (pairs by default) from an array
function getGroupedNumbersFromArray(pairArray, numGroupedBy = 2) {
    let numMatches = 0;
    let numGroupedMatches = 0;
    //get unique entries from array
    const uniqueNumbers = Array.from(new Set(pairArray));
    console.log(uniqueNumbers);
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
    
    //createObjectWithRemovedProperty - returns an object from an existing object with a specified property removed
    function createObjectWithRemovedProperty(oldObj, prop) {
    let newObjMinusProp = {...oldObj};
    if (newObjMinusProp.hasOwnProperty(prop)) {
        delete newObjMinusProp[prop];        
    }
    return newObjMinusProp;
    }

    //