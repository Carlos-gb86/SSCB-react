export function createHistCurve(arr,binWidth) {
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);
    const binCount = Math.ceil((maxVal - minVal) / binWidth);

    const hist = Array(binCount).fill(0);
    const edges = Array(binCount + 1).fill(0);

    arr.forEach(value => {
        const binIndex = Math.floor((value - minVal) / binWidth);
        if (binIndex < binCount) {
            hist[binIndex]++;
        }
    });

    for (let i = 0; i < edges.length; i++) {
        edges[i] = minVal + i * binWidth;
    }

    // Add an extra zero value at the beginning of the histogram array
    hist.unshift(0);

    return { N: hist, edges };
}
