<script>
export default {
  props: ['task', 'tasks'],
  emits: ['tasks-updated', 'task-ischecked-updated', 'hint-updated'],

  methods: {
    deleteTask() {
      if (this.task.isChecked) {
        const updatedTasks = this.tasks.filter(t => t.id !== this.task.id)
        this.$emit('tasks-updated', updatedTasks)
      } else {
        // alert('Oh no!')
        this.$emit('hint-updated', 'чекни чекбокс')
      }
    },
    toggleCompleted(event) {
      if (this.task.isChecked === true) this.task.isChecked = false
      else this.task.isChecked = true
    },
  },
}
</script>

<template>
  <li v-bind:class="{ completed: task.isChecked }" @click="toggleCompleted">
    <input
      :checked="task.isChecked"
      type="checkbox"
      class="checkbox"
      @change="$emit('task-ischecked-updated', $event.target.checked)"
    />

    <span class="task-text">{{ task.text }}</span>

    <button @click="deleteTask" class="deleteButton">Удалить</button>
  </li>
</template>
