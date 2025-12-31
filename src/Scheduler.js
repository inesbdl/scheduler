class Scheduler {
    constructor() {
        this.tasks = new Map();
    }

    getTasks() {
        return Array.from(this.tasks.values());
    }

    setTask(name, action) {
        if (!name || typeof name !== 'string') {
            throw new Error('Le nom ne doit pas etre vide et doit etre une chaine de caractere');
        }

        if (typeof action !== 'function') {
            throw new Error("L'action doit être une fonction");
        }

        this.tasks.set(name, { name, action });
    }

    removeTask(name) {
        if(!name || typeof name !== 'string') {
            throw new Error('Le nom doit etre une chaine de caractere');
        }
        this.tasks.delete(name);
    }

}

module.exports = Scheduler;
