<script setup>
import TodoListItem from './TodoListItem.vue'

defineProps({
  todos: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['completed'])
</script>

<template>
  <div class="todo-list-wrapper">
    <ul class="todo-list">
      <TodoListItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo
        @completed="(value) => emit('completed', index, value)"
      />
    </ul>

    <QInnerLoading :showing="isLoading">
      <QSpinnerGears size="50px" color="primary" />
    </QInnerLoading>
  </div>
</template>

<style lang="scss" scoped>
.todo-list-wrapper {
  position: relative;
  min-height: 400px;
  margin-top: 16px;
}

.todo-list {
  list-style-type: none;
  padding-inline-start: 0px;
  margin: 0;
}
</style>
