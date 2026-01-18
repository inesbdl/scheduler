const EachWeek = require('../src/EachWeek');

describe('EachWeek', () => {
    test('should return true on Sunday at midnight UTC', () => {
        const eachWeek = new EachWeek(0);
        const validTime = new Date('2025-01-05T00:00:00.000Z').getTime();
        
        expect(eachWeek.shouldRun(validTime)).toBe(true);
    });

    test('should return false if day is wrong (Monday)', () => {
        const eachWeek = new EachWeek(0);
        const wrongDay = new Date('2025-01-06T00:00:00.000Z').getTime();
        
        expect(eachWeek.shouldRun(wrongDay)).toBe(false);
    });

    test('should return false if time is wrong', () => {
        const eachWeek = new EachWeek(0);
        const wrongTime = new Date('2025-01-05T10:00:00.000Z').getTime();
        
        expect(eachWeek.shouldRun(wrongTime)).toBe(false);
    });
});