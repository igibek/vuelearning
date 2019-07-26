
window.VueEvent = new Vue();

Vue.component('tabs', {
    template: `
    <div>
    <div class="tabs">
        <ul>
            <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                <a href="#" @click="selectTab(tab)">{{tab.name}}</a>
            </li>        
        </ul>
    </div>

    <div id="tab-details">
        <slot></slot>
    </div>
    </div>
    `,
    data() {
        return {
            tabs: []
        }
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name === selectedTab.name);
            })
        }
    },
})


Vue.component('tab', {
    template: `
    <div v-show="isActive">
        <slot></slot>
    </div>
    `,
    props: {
        name: { require:true },
        selected: {default: false}
    },
    data() {
        return {
            isActive: this.selected
        }
    },
    created () {
        VueEvent.$on('applied', () => alert('Handling the fired event'));
    },
})

Vue.component('coupon', {
    template: `
        <input placeholder="Apply your coupon here" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            VueEvent.$emit('applied');
            this.$emit('applied');
        }
    },
})

new Vue({
    el:"#root",
    data:{
        isApplied: false
    },
    methods: {
        onCouponApplied() {
            this.isApplied = true;
        }
    }
})