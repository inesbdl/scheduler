class EachHour {
    shouldRun(now) {
        const date = new Date(now);
        return date.getMinutes() === 0 && date.getSeconds() === 0;
    }
}

module.exports = EachHour;