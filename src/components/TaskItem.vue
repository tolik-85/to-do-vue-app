<script>
export default {
  props: ['task'],

  emits: ['taskDelete', 'ischecked-updated'],

  data() {
    return {
      // checkbox: false,
    }
  },

  methods: {
    deleteTask() {
      if (this.checkbox) {
        this.$emit('taskDelete', this.task.id)
      }
      // this.checkbox = false
    },
  },
}

// :checked="task.isChecked"
// @change="$emit('ischecked-updated', $event.target.checked)"
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
