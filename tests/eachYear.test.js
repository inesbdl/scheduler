const EachYear = require('../src/EachYear');

describe('EachYear', () => {
    test('should return true on January 1st at midnight UTC', () => {
        const eachYear = new EachYear();
        const validTime = new Date('2025-01-01T00:00:00.000Z').getTime();
        
        expect(eachYear.shouldRun(validTime)).toBe(true);
    });

    test('should return false if month is not January', () => {
        const eachYear = new EachYear();
        const wrongMonth = new Date('2025-02-01T00:00:00.000Z').getTime();
        
        expect(eachYear.shouldRun(wrongMonth)).toBe(false);
    });

    test('should return false if day is not 1st', () => {
        const eachYear = new EachYear();
        const wrongDay = new Date('2025-01-02T00:00:00.000Z').getTime();
        
        expect(eachYear.shouldRun(wrongDay)).toBe(false);
    });
});