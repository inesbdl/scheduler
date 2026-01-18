const EachHour = require('../src/EachHour');

describe('EachHour', () => {
    test('should return true at the beginning of an hour (XX:00:00)', () => {
        const eachHour = new EachHour();
        const validTime = new Date('2025-01-01T10:00:00.000Z').getTime();
        
        expect(eachHour.shouldRun(validTime)).toBe(true);
    });

    test('should return false if minute is not 0 (XX:05:00)', () => {
        const eachHour = new EachHour();
        const wrongMinute = new Date('2025-01-01T10:05:00.000Z').getTime();
        
        expect(eachHour.shouldRun(wrongMinute)).toBe(false);
    });

    test('should return false if seconds are not 0 (XX:00:30)', () => {
        const eachHour = new EachHour();
        const wrongSecond = new Date('2025-01-01T10:00:30.000Z').getTime();
        
        expect(eachHour.shouldRun(wrongSecond)).toBe(false);
    });
});