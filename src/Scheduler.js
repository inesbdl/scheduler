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
    setTask(name, action) {
        if (!name || typeof name !== 'string') {
            throw new Error('Le nom ne doit pas etre vide et doit etre une chaine de caractere');
        }

        if (typeof action !== 'function') {
            throw new Error("L'action doit être une fonction");
        }

        this.tasks.set(name, { name, action });
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
