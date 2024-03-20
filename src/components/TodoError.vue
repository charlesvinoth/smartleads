<script setup>
defineProps({
  error: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="error">{{ error }}</div>
</template>

<style lang="scss" scoped>
.error {
  color: red;
  margin-top: 16px;
}
</style>
