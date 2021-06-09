(function () {
    'use strict';


    const vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: [{
                title: 'sample',
                isDone: false
            }]
        },
        watch: {
            todos: {
                handler: function () {
                    localStorage.setItem('todos', JSON.stringify(this.todos))
                    // store.set('todos', this.todos.isDone);
                    // document.cookie = 'todos'
                },
                deep: true
            }
        },
        mounted: function () {
            this.todos = JSON.parse(localStorage.getItem('todos'));
            // this.todos = document.cookie.split(';');
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
                    todos.splice(index, 1);
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