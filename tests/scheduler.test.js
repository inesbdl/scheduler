const Scheduler = require('../src/Scheduler');
const Always = require('../src/Always');

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
    }).toThrow("Le nom ne doit pas etre vide et doit etre une chaine de caractere");
  });

  test('erreur si action n est pas une fonction', () => {
    const scheduler = new Scheduler();

    expect(() => {
      scheduler.setTask('task1', null);
    }).toThrow("L'action doit être une fonction");
  });

});

// supp task
describe('Scheduler - removeTaskk', () => {

  test('supprimer une tache existante', () => {
    const scheduler = new Scheduler();
    scheduler.setTask('a', jest.fn());
    scheduler.setTask('b', jest.fn());

    scheduler.removeTask('a');

    const tasks = scheduler.getTasks();
    expect(tasks).toHaveLength(1);
    expect(tasks[0].name).toBe('b');
  });

  test('supprimer une tache inexistante', () => { //ne fait rien pas d'erreur
    const scheduler = new Scheduler();
    scheduler.setTask('a', jest.fn());

    scheduler.removeTask('unknown');

    expect(scheduler.getTasks()).toHaveLength(1);
  });

  test('erreur si name est invalide', () => {
    const scheduler = new Scheduler();

    expect(() => scheduler.removeTask('')).toThrow();
    expect(() => scheduler.removeTask(null)).toThrow();
  });

});

//clock
describe('Scheduler - clock ', () => {

  test('scheduler utilise clock injectee', () => {
    const clock = { now: jest.fn(() => 42) };
    const scheduler = new Scheduler(clock);

    expect(scheduler.clock.now()).toBe(42);
  });

  test('clock injectee doit avoir now', () => {
    expect(() => new Scheduler({})).toThrow('clock injectee doit avoir now');
  });

});

// periodicite always

describe('Scheduler - periodicite always', () => {

  test('execute tache', () => {
    const clock = { now: jest.fn(() => 0) };
    const scheduler = new Scheduler(clock);
    const action = jest.fn();

    scheduler.setTask('task', new Always(), action);
    scheduler.update();

    expect(action).toHaveBeenCalledTimes(1);
  });

  test('execute plusieurs taches', () => {
    const clock = { now: jest.fn(() => 0) };
    const scheduler = new Scheduler(clock);

    const a1 = jest.fn();
    const a2 = jest.fn();

    scheduler.setTask('t1', new Always(), a1);
    scheduler.setTask('t2', new Always(), a2);

    scheduler.update();

    expect(a1).toHaveBeenCalled();
    expect(a2).toHaveBeenCalled();
  });

});
