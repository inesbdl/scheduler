const EachMonth = require('../src/EachMonth');

describe('EachMonth', () => {
    test('should return true on the 1st of the month at midnight UTC', () => {
        const eachMonth = new EachMonth();
        const validTime = new Date('2025-02-01T00:00:00.000Z').getTime();
        
        expect(eachMonth.shouldRun(validTime)).toBe(true);
    });

    test('should return false if day of month is not 1', () => {
        const eachMonth = new EachMonth();
        const wrongDay = new Date('2025-02-02T00:00:00.000Z').getTime();
        
        expect(eachMonth.shouldRun(wrongDay)).toBe(false);
    });

    test('should return false if time is not midnight', () => {
        const eachMonth = new EachMonth();
        const wrongTime = new Date('2025-02-01T12:00:00.000Z').getTime();
        
        expect(eachMonth.shouldRun(wrongTime)).toBe(false);
    });
});