const usedIndexes = new Set();

function RandomUniqueFromTo(max, min) {
    try {
        const newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (usedIndexes.has(newNumber)) {
            return RandomUniqueFromTo(max, min);
        } else {
            usedIndexes.add(newNumber);
            return newNumber;
        }
    } catch (error) {
        console.log(error);
        return min;
    }
}

module.exports = { RandomUniqueFromTo };
