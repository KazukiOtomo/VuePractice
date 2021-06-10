(function () {
    'use strict';


    const vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: []
        },
        watch: {
            todos: {
                handler: function () {
                    //localStorage.setItem('todos', JSON.stringify(this.todos))
                    // store.set('todos', this.todos.isDone);
                    // document.cookie = 'todos'
                },
                deep: true
            }
        },
        mounted: function () {
            //this.todos = JSON.parse(localStorage.getItem('todos'));
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

    const likeComponent = Vue.extend({
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button @click="countUp">いいね！{{count}}</button>',
        methods: {
            countUp: function () {
                this.count++;
            }
        }
    });

    const like = new Vue({
        el: '#like',
        components: {
            'like-component': likeComponent
        },
        
    });

})();