<script>
export default {
  props: ['task', 'tasks'],

  emits: ['tasks-updated'],
  // 'ischecked-updated',

  methods: {
    deleteTask() {
      if (this.task.isChecked) {
        const updatedTasks = this.tasks.filter(t => t.id !== this.task.id)
        this.$emit('tasks-updated', updatedTasks)
      }
    },

    checkTask($event) {
      // console.log($event.target.checked)

      this.tasks.forEach(t => {
        if (t.id === this.task.id) {
          t.isChecked = $event.target.checked
        }
      })

      // this.$emit('tasks-updated', updatedTasks)
    },
  },
}
</script>

<template>
  <li v-bind:class="{ completed: task.isChecked }">
    <input
      :checked="task.isChecked"
      type="checkbox"
      class="checkbox"
      @change="checkTask"
    />
    <!-- @change="$emit('ischecked-updated', $event.target.checked)" -->

    <span class="task-text">{{ task.text }}</span>

    <button @click="deleteTask" class="deleteButton">Удалить</button>
  </li>
</template>
