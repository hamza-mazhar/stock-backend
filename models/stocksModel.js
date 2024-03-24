// Function to filter stock data based on date range
const filterStockData = (data, from, to) => {
    const filteredData = [];
    const fromDate = new Date(from);
    const toDate = new Date(to);
    for (const date in data['Time Series (Daily)']) {
        const currentDate = new Date(date);
        if (
            (!from || currentDate >= fromDate) &&
            (!to || currentDate <= toDate)
        ) {
            filteredData.push({
                timestamp: date,
                close: parseFloat(
                    data['Time Series (Daily)'][date]['4. close']
                ),
            });
        }
    }
    return filteredData;
};

module.exports = {
    filterStockData,
};
