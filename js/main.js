(function() {
    'use strict';

    const vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: []
        },
        watch: {
            todos: {
                handler: function() {
                    localStorage.setItem('todos', JSON.stringify(this.todos))
                        // store.set('todos', this.todos.isDone);
                        // document.cookie = 'todos'
                },
                deep: true
            }
        },
        mounted: function() {
            this.todos = JSON.parse(localStorage.getItem('todos'));
            // this.todos = document.cookie.split(';');
        },
        methods: {
            addItem: function() {
                let item = {
                    title: this.newItem,
                    isDone: false
                };
                this.todos.push(item);
                this.newItem = '';
            },
            deleteItem: function(index) {
                if (confirm('本当に削除しますか?')) {
                    todos.splice(index, 1);
                }
            },
            purge: function() {
                if (!confirm('終了したタスクをまとめて削除しますか?')) {
                    return;
                }
                this.todos = this.remaining;
            }
        },
        computed: {
            remaining: function() {
                return this.todos.filter(function(todo) {
                    return !todo.isDone;
                });
            }
        }
    });

    let likeComponent = Vue.extend({
        props: {
            message: {
                type: String,
                default: 'いいね！'
            }
        },
        data: function() {
            return {
                count: 0
            }
        },
        template: '<button @click="countUp">{{message}}{{count}}</button>',
        methods: {
            countUp: function() {
                this.count++;
                this.$emit('increment');
            }
        }
    });

    let like = new Vue({
        el: '#like',
        components: {
            'like-component': likeComponent
        },
        data: {
            total: 0
        },
        methods: {
            incrementTotal: function() {
                this.total++;
            }
        }

    });


})();