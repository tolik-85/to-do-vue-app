<script>
export default {
  emits: ['taskChanged'],
  data() {
    return {
      taskText: '',
      badWords: ['баклажан', 'помидор', 'огурец'],
    }
  },
  methods: {
    addTask() {
      if (this.taskText === '') return
      if (this.isGoodTask(this.taskText)) {
        const task = {
          taskText: this.taskText.trim(),
          taskId: this.makeId(),
        }
        this.$emit('taskChanged', task)
      }
      this.taskText = ''
    },
    makeId() {
      return crypto.randomUUID()
    },
    isGoodTask(task) {
      for (const badWord of this.badWords) {
        if (task.toLowerCase().includes(badWord)) {
          return false
        }
      }
      return true
    },
  },
}
</script>

<template>
  <div>
    <input
      v-model="taskText"
      type="text"
      id="taskInput"
      placeholder="Введите задачу"
    />
    <button @click="addTask" id="addTaskButton">Добавить задачу</button>
  </div>
</template>
