Vue.component('b-card', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
    <div class="card" v-show="isVisible">
    <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ body }}</p>
        <a href="#" class="btn btn-primary" @click="isVisible = false">Close</a>
    </div>
    </div>
    `
})

new Vue({
    el: "#root"
})