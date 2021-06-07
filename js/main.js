(function () {
    'use strict'

    //two way data binding (to UI)


    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: []
        },
        methods: {
            addItem: function () {
                this.todos.push(this.newItem);
                this.newItem = ""
            },
            deleteItem: function (index) {
                if (confirm("本当に削除してもよろしいですか？")) {
                    this.todos.splice(index, 1)
                }
            }
        }
    })
})();