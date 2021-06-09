(function () {
    'use strict';

    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: []
        },
        watch: {
            todos: {
                handler: function () {
                    sessionStorage.setItem('todos', JSON.stringify(this.todos))
                },
                deep: true
            }
        },
        mounted: function () {
            this.todos = JSON.parse(sessionStorage.getItem('todos'));
        },
        methods: {
            addItem: function () {
                let item = {
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