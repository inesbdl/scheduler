class EachWeek {
    constructor(dayOfWeek) {
        this.dayOfWeek = dayOfWeek !== undefined ? dayOfWeek : 0;
    }

    shouldRun(now) {
        const date = new Date(now);
        return date.getUTCDay() === this.dayOfWeek &&
               date.getUTCHours() === 0 &&
               date.getUTCMinutes() === 0 &&
               date.getUTCSeconds() === 0;
    }
}

module.exports = EachWeek;