

export const calculatedMean = (data, propertyName) => {
    let totalEntries = data?.length;
    let sum = 0;
    // calculate total sum of all entries
    for (let i = 0; i < totalEntries; i++) {
        sum += Number(data[i]?.[propertyName]);
    }
    let mean = sum / totalEntries;
    return mean.toFixed(3);
}

export const calculatedMedian = (data, propertyName) => {
    let totalEntries = data?.length;
    // get data according to the property name specified
    const propertyData = data?.map((entry) => Number(entry?.[propertyName])) || [];
    // sorting the data
    propertyData.sort((a, b) => a - b);
    // check if data length is even or odd and return median accordingly
    if (totalEntries % 2 === 0) {
        return ((propertyData[totalEntries / 2 - 1] + propertyData[totalEntries / 2]) / 2).toFixed(3);
    }
    return propertyData[(totalEntries - 1) / 2].toFixed(3);
}

export const calculatedMode = (data, propertyName) => {
    // get data according to the property name specified
    const propertyData = data?.map((entry) => Number(entry?.[propertyName])) || [];
    const mode = {};
    let max = 0;
    let count = 0;
    // calculating maximum occurence of a number to calculate mode
    propertyData.forEach((item) => {
        mode[item] = (mode[item] || 0) + 1;
        if (count < mode[item]) {
            max = item;
            count = mode[item];
        }
    });
    return max.toFixed(3);
};