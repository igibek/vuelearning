Vue.component('task-list', {
    template: `<div>
            <task-item v-for="task in tasks">{{ task.body }}</task-item>
        </div>`,
    data() {
        return {
            tasks: [ 
                {
                    body: "20%"
                },
                {
                    body: "priority"
                }
            ]
        }
    }
})

Vue.component('task-item', {
    template: '<li><slot></slot></li>'
})

new Vue({
    el: "#root"
})