export function mergeArrayByDateISO (firstArray, secondArray) {
    let merged = firstArray.concat(secondArray);
    return merged.sort((a, b) => {
        return (a.createdAt > b.createdAt) ? -1 : ((a.createdAt < b.createdAt) ? 1 : 0);
    });
}