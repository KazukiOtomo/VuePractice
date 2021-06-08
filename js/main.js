(function () {
    'use strict';

    const vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: []
        },
        methods: {
            addItem: function () {
                const item = {
                    title: this.newItem,
                    isDone: false
                };
                this.todos.push(item);
                this.newItem = '';
            },
            deleteItem: function (index) {
                if (confirm('are you sure?')) {
                    this.todos.splice(index, 1);
                }
            }
        },
        computed: {
            remaining: function () {
                let items = this.todos.filter(function (todo) {
                    return !todo.isDone;
                });
                return items.length;
            }
        }
    });
})();