<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])

const newTodo = ref('')
const error = ref('')

function onSubmit() {
  if (!newTodo.value) {
    error.value = 'Please type something'
  } else {
    emit('add', newTodo.value)
    newTodo.value = ''
    error.value = ''
  }
}
</script>

<template>
  <QForm ref="formRef" class="row items-start q-gutter-sm" @submit="onSubmit">
    <QInput
      ref="fieldRef"
      v-model="newTodo"
      dense
      label="New todo"
      :error="!!error"
      :error-message="error"
      class="col"
    />
    <QBtn color="primary" label="Add" type="submit" padding="8px 16px" />
  </QForm>
</template>

<style lang="scss" scoped></style>
