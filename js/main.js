(function () {
    'use strict'

    //two way data binding (to UI)


    var vm = new Vue({
        el: '#app',
        data: {
            newItem : '',
            todos: []
        },
        methods: {
            addItem: function () {
                this.todos.push(this.newItem);
                this.newItem = ""
            }
        }
    })
})();