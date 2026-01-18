class EachDay {
    shouldRun(now) {
        const date = new Date(now);
        return date.getUTCHours() === 0 &&
               date.getUTCMinutes() === 0 &&
               date.getUTCSeconds() === 0;
    }
}

module.exports = EachDay;