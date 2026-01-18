class EachYear {
    shouldRun(now) {
        const date = new Date(now);
        return date.getUTCMonth() === 0 &&
               date.getUTCDate() === 1 &&
               date.getUTCHours() === 0 &&
               date.getUTCMinutes() === 0 &&
               date.getUTCSeconds() === 0;
    }
}

module.exports = EachYear;