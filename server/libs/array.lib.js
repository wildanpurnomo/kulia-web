export function mergeArrayByDateISO (firstArray, secondArray) {
    let merged = firstArray.concat(secondArray);
    return merged.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
}