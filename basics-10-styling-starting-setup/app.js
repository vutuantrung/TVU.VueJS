const app = Vue.createApp({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    methods:{
        boxSelected(box){
            this.boxASelected = box === 'A';
            this.boxBSelected = box === 'B';
            this.boxCSelected = box === 'C';
        }
    }
});

app.mount('#styling')
// NOTE In vue we can change the style of things on the page.