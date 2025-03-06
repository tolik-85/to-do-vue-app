<script>
export default {
  props: ['task', 'id'],
  emits: ['taskDelete'],
  data() {
    return {
      checkbox: false,
    }
  },
  methods: {
    deleteTask() {
      if (this.checkbox) {
        this.$emit('taskDelete', this.$refs.tasktext.getAttribute('taskId'))
      }
      this.checkbox = false
    },
  },
}
</script>

<template>
  <li class="completed">
    <input v-model="checkbox" type="checkbox" class="checkbox" />
    <span class="task-text" ref="tasktext" :taskId="id">{{ task }}</span>
    <button @click="deleteTask" class="deleteButton">Удалить</button>
  </li>
</template>
