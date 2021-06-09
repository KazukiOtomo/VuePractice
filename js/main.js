(function () {
    'use strict';

    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: []
        },
        methods: {
            addItem: function () {
                var item = {
                    title: this.newItem,
                    isDone: false
                };
                this.todos.push(item);
                this.newItem = '';
            },
            deleteItem: function (index) {
                if (confirm('本当に削除しますか?')) {
                    this.todos.splice(index, 1);
                }
            },
            purge: function () {
                if (!confirm('終了したタスクをまとめて削除しますか?')) {
                    return;
                }
                this.todos = this.remaining;
            }
        },
        computed: {
            remaining: function () {
                return this.todos.filter(function (todo) {
                    return !todo.isDone;
                });
            }
        }
    });
})();