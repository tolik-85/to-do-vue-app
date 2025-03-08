<script>
import isBadWord from '@/functions/isBadWord'
import makeId from '@/functions/makeId'

export default {
  props: ['tasks'],

  emits: ['tasks-updated'],

  data() {
    return {
      taskText: '',
    }
  },

  methods: {
    addTask() {
      if (this.taskText === '' || !isBadWord(this.taskText)) return

      const task = {
        id: makeId(),
        text: this.taskText,
        isChecked: false,
      }

      const updatedTasks = this.tasks.concat(task)
      this.$emit('tasks-updated', updatedTasks)
      this.taskText = ''
    },
  },
}
</script>

<template>
  <div>
    <input
      v-model.trim="taskText"
      @keyup.enter="addTask"
      type="text"
      id="taskInput"
      placeholder="Введите задачу"
    />
    <button @click="addTask" id="addTaskButton">Добавить задачу</button>
  </div>
</template>
