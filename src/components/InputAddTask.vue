<script>
import isBadWord from '@/functions/isBadWord'
import isAlreadyExists from '@/functions/isAlreadyExists'
import isEmpty from '@/functions/isEmpty'
import makeId from '@/functions/makeId'

export default {
  props: ['modelValue', 'tasks', 'hint'],
  emits: ['update:model-value', 'tasks-updated', 'hint-updated'],

  data() {
    return {
      taskText: '',
      // hintText: this.modelValue,
      hintText: this.hint,
    }
  },

  methods: {
    addTask() {
      if (isEmpty(this.taskText)) {
        // this.$emit('hint-updated', 'не допускается пустой ввод текста')
        this.$emit('update:model-value', 'не допускается пустой ввод текста')
        // this.hintText = 'не допускается пустой ввод текста'
        return
      }
      if (!isBadWord(this.taskText)) {
        // this.$emit('hint-updated', 'не допускается помидор, баклажан, огурец')
        this.$emit('hint-updated', 'не допускается помидор, баклажан, огурец')
        // this.hintText = 'не допускается помидор, баклажан, огурец'
        this.taskText = ''
        return
      }
      if (isAlreadyExists(this.taskText, this.tasks)) {
        // this.$emit('hint-updated', `${this.taskText} уже есть в списке`)
        this.$emit('update:model-value', `${this.taskText} уже есть в списке`)
        // this.hintText = `${this.taskText} уже есть в списке`
        this.taskText = ''
        return
      }
      const task = {
        id: makeId(),
        text: this.taskText,
        isChecked: false,
      }

      const updatedTasks = this.tasks.concat(task)
      this.$emit('tasks-updated', updatedTasks)
      this.taskText = ''
      // this.$emit('hint-updated', '')
      this.$emit('update:model-value', '')

      this.$refs.inputAddTask.focus()
    },
  },
}
</script>

<template>
  <div>
    <input
      v-model.trim="taskText"
      id="taskInput"
      ref="inputAddTask"
      placeholder="Введите задачу"
      autofocus
      @keyup.enter="addTask"
    />

    <button @click="addTask" id="addTaskButton">Добавить задачу</button>
  </div>
</template>
