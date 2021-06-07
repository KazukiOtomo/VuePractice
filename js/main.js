(function () {
    'use strict'

    //two way data binding (to UI)


    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: [{
                title:'sample',
                isDone:false
            }]
        },
        methods: {
            addItem: function() {
                var item = {
                  title: this.newItem,
                  isDone: false
                };
                this.todos.push(item);
                this.newItem = '';
              },
            deleteItem: function (index) {
                if (confirm("本当に削除してもよろしいですか？")) {
                    this.todos.splice(index, 1)
                }
            }
        }
    })
})();