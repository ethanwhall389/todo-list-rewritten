class List {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    }

    getTasks () {
        return this.tasks;
    }

    addTask (taskName) {
        this.tasks.push({name: taskName, checked: false});
        // localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    removeTask (indexToRemove) {
        this.tasks.splice(indexToRemove, 1);
        
    }
    
    setAllTasks (tasks) {
        this.tasks = tasks; 
    }

    removeChecked (taskIndex) {
        this.tasks[taskIndex].checked = false;
    }

    addChecked (taskIndex) {
        this.tasks[taskIndex].checked = true;
    }
}

const DefaultList = new List();

export default DefaultList;