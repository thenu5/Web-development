
new Vue({
    el: '#app',
    data: {
        newTask: '',
        newTime: '',
        tasks: [],
    },
    methods: {
        addTask() {
            if (this.newTask && this.newTime) {
                this.tasks.push({
                    name: this.newTask,
                    time: this.newTime,
                    completed: false, 
                    deadline: null, 
                });
                this.newTask = '';
                this.newTime = '';
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        updateTime() {

        },
        setDeadline(index) {
            const newDeadline = prompt('Set a deadline (e.g., "12:00 PM"):');
            if (newDeadline !== null) {
                this.tasks[index].deadline = newDeadline;
            }
        },
    },
});










