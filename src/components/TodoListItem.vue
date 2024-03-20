<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['completed'])
</script>

<template>
  <li class="todo-list-item">
    <QCheckbox
      :model-value="todo.completed"
      @update:model-value="emit('completed', !todo.completed)"
    />
    <span class="todo-title" :class="{ 'strike-through': todo.completed }">{{ todo.title }}</span>
  </li>
</template>

<style lang="scss" scoped>
.todo-list-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 4;

  .todo-title {
    flex-grow: 1;

    &.strike-through {
      text-decoration: line-through;
    }
  }
}
</style>
