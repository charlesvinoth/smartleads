<script setup>
import { onMounted, ref } from 'vue'
import { addTodo, getTodos, updateTodo } from '@/api/todos'
import TodoError from '@/components/TodoError.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import TodoTitle from '@/components/TodoTitle.vue'

const todos = ref([])
const isLoading = ref(true)
const errorMsg = ref('')

onMounted(() => _getTodos())

async function _getTodos() {
  const { data, error } = await getTodos()

  if (error) {
    errorMsg.value = error
  } else {
    todos.value = data
  }
  isLoading.value = false
}

async function _addTodo(title) {
  isLoading.value = true
  const { error } = await addTodo(title)

  if (error) {
    errorMsg.value = error
  } else {
    todos.value.unshift({
      id: todos.value.length + 1,
      title,
      completed: false
    })
  }
  isLoading.value = false
}

async function _updateTodo(index, completed) {
  isLoading.value = true

  const todo = todos.value[index]
  const { error } = await updateTodo(todo.id, completed)

  if (error) {
    errorMsg.value = error
  } else {
    todos.value[index].completed = completed
  }
  isLoading.value = false
}
</script>

<template>
  <main class="container">
    <section class="todos">
      <TodoTitle />
      <TodoInput @add="_addTodo" />
      <TodoList :todos :is-loading @completed="_updateTodo" />
      <TodoError :error="errorMsg" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.container {
  width: 540px;
  margin: auto;
  padding: 24px;
}

.todos {
  background-color: white;
  border-radius: 8px;
  border: 1px solid $gray-3;
  padding: 24px;
}
</style>
