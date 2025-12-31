const Scheduler = require('./Scheduler');

describe('Scheduler', () => {
  test('a new scheduler has no tasks', () => {
    const scheduler = new Scheduler();

    expect(scheduler.getTasks()).toEqual([]);
  });
});
