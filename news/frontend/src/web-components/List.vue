<template>
    <div>
        <h1>Latest news</h1>
        <div v-for="item in news">{{item.title}}</div>
    </div>
</template>

<script>
    var data = {
        news: []
    };

    var todoAdded = function(event) {
        console.log('todo:added is caught inside List.vue');

        var todo = event.detail;

        var item = {
            title: `Breaking: new todo has been added: "${todo.description}"`
        };

        data.news.push(item);
    };

    module.exports = {
        data: function() {
            return data;
        },
        
        mounted: function() {
            window.addEventListener('todo:added', todoAdded);
        },

        beforeUnmount: function() {
            window.removeEventListener(todoAdded);
        }
    };
</script>