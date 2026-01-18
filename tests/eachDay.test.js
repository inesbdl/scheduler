const EachDay = require('../src/EachDay');

describe('EachDay', () => {
    test('should return true at midnight (00:00:00)', () => {
        const eachDay = new EachDay();
        const validTime = new Date('2025-01-01T00:00:00.000Z').getTime();
        
        expect(eachDay.shouldRun(validTime)).toBe(true);
    });

    test('should return false if hour is not 0 (01:00:00)', () => {
        const eachDay = new EachDay();
        const wrongHour = new Date('2025-01-01T01:00:00.000Z').getTime();
        
        expect(eachDay.shouldRun(wrongHour)).toBe(false);
    });
});