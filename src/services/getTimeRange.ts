const getTimeRange = (time: string): Date => {
    const dateNow = new Date();
    
    let timeRange: number = 0;
    let timeToSearch: number = 0;

    if (time === "5m") {
        timeRange = 5 * 60 * 1000;
        timeToSearch = dateNow.getTime() - timeRange;
    }

    if (time === "15m") {
        timeRange = 15 * 60 * 1000;
        timeToSearch = dateNow.getTime() - timeRange;
    };

    if (time === "0_5h") {
        timeRange = 30 * 60 * 1000;
        timeToSearch = dateNow.getTime() - timeRange;
    };
    
    if (time === "1h") {
        timeRange = 1 * 60 * 60 * 1000;
        timeToSearch = dateNow.getTime() - timeRange;
    };

    if (time === "3h") {
        timeRange = 3 * 60 * 60 * 1000;
        timeToSearch = dateNow.getTime() - timeRange;
    };

    if (time === "4h") {
        timeRange = 4 * 60 * 60 * 1000;
        timeToSearch = dateNow.getTime() - timeRange;
    };

    if (time === "6h") {
        timeRange = 6 * 60 * 60 * 1000;
        timeToSearch = dateNow.getTime() - timeRange;
    };

    if (time === "12h") {
        timeRange = 6 * 60 * 60 * 1000;
        timeToSearch = dateNow.getTime() - timeRange;
    };

    if (time === "24h") {
        timeRange = 24 * 60 * 60 * 1000;
        timeToSearch = dateNow.getTime() - timeRange;
    };

    return new Date(timeToSearch);
};

module.exports = getTimeRange;