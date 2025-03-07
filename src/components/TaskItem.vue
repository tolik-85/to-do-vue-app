<script>
export default {
  props: ['task'],

  emits: ['taskDelete', 'ischecked-updated'],

  methods: {
    deleteTask() {
      if (this.task.isChecked) this.$emit('taskDelete', this.task.id)
    },
  },
}
</script>

<template>
  <li v-bind:class="{ completed: task.isChecked }">
    <input
      :checked="task.isChecked"
      @change="$emit('ischecked-updated', $event.target.checked)"
      type="checkbox"
      class="checkbox"
    />

    <span class="task-text">{{ task.text }}</span>

    <button @click="deleteTask" class="deleteButton">Удалить</button>
  </li>
</template>
