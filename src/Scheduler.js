const Always = require('./Always');

class Scheduler {
    constructor(clock = { now: () => Date.now() }) {
        if (!clock || typeof clock.now !== 'function') {
            throw new Error('clock injectee doit avoir now');
        }

        this.clock = clock;
        this.tasks = new Map();
    }

    getTasks() {
        return Array.from(this.tasks.values());
    }

    // ajouter une tache
    setTask(name, periodicity,action) {
        if (!name || typeof name !== 'string') {
            throw new Error('Le nom ne doit pas etre vide et doit etre une chaine de caractere');
        }

        // periodicity optionnel
        if (typeof action === 'undefined' && typeof periodicity === 'function') {
            action = periodicity;
            periodicity = new Always();
        }

        if (typeof action !== 'function') {
            throw new Error("L'action doit être une fonction");
        }

        if (!periodicity || typeof periodicity.shouldRun !== 'function') {
            throw new Error('Invalid periodicity');
        }

        this.tasks.set(name, {
            name,
            periodicity,
            action,
            lastRun: null
        });
    }

    update() {
        const now = this.clock.now();

        for (const task of this.tasks.values()) {
            if (task.periodicity.shouldRun(now)) {
                task.action();
                task.lastRun = now;
            }
        }
    }

    // suoprimer une tache par nom
    removeTask(name) {
        if(!name || typeof name !== 'string') {
            throw new Error('Le nom doit etre une chaine de caractere');
        }
        this.tasks.delete(name);
    }
}

module.exports = Scheduler;
