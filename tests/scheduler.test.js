const Scheduler = require('../src/Scheduler');

describe('Scheduler', () => {
  test('premier scheduler sans taches', () => {
    const scheduler = new Scheduler();

    expect(scheduler.getTasks()).toEqual([]);
  });
});


// setTask
describe('Scheduler - setTask', () => {

  test('creer une tache', () => {
    const scheduler = new Scheduler();
    const action = jest.fn();

    scheduler.setTask('task1', action);

    const tasks = scheduler.getTasks();
    expect(tasks).toHaveLength(1);
    expect(tasks[0].name).toBe('task1');
    expect(tasks[0].action).toBe(action);
  });

  test('remplacer une tache si nom déjà existant', () => {
    const scheduler = new Scheduler();
    const action1 = jest.fn();
    const action2 = jest.fn();

    scheduler.setTask('task1', action1);
    scheduler.setTask('task1', action2);

    const tasks = scheduler.getTasks();
    expect(tasks).toHaveLength(1);
    expect(tasks[0].action).toBe(action2);
  });

  test('erreur name vide', () => {
    const scheduler = new Scheduler();
    const action = jest.fn();

    expect(() => {
      scheduler.setTask('', action);
    }).toThrow();
  });

  test('erreur si action n est pas une fonction', () => {
    const scheduler = new Scheduler();

    expect(() => {
      scheduler.setTask('task1', null);
    }).toThrow();
  });

});
