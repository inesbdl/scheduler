const Scheduler = require('../src/Scheduler');

describe('Scheduler', () => {
  test('premier scheduler sans taches', () => {
    const scheduler = new Scheduler();

    expect(scheduler.getTasks()).toEqual([]);
  });
});
