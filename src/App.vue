<script>
import InputAddTask from './components/InputAddTask.vue'
import TaskItem from './components/TaskItem.vue'

export default {
  components: { InputAddTask, TaskItem },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    pushTask(task) {
      this.tasks.push(task)
    },

    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => {
        return task.taskId != taskId
      })
    },
  },
}
</script>
<template>
  <body>
    <div class="container">
      <h1>Список задач</h1>
      <InputAddTask @taskChanged="pushTask($event)" />
      <ul id="taskList">
        <TaskItem
          v-for="(task, idx) of tasks"
          :key="idx"
          :task="task.taskText"
          :id="task.taskId"
          @task-delete="deleteTask($event)"
        />
      </ul>
    </div>
  </body>
</template>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
.container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}
h1 {
  margin-bottom: 20px;
  color: #333;
}
#taskInput {
  width: calc(100% - 50px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}
#addTaskButton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
#addTaskButton:hover {
  background-color: #0056b3;
}
#taskList {
  list-style-type: none;
  padding: 0;
}
#taskList li {
  background: #f9f9f9;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}
.checkbox {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  width: 20px;
  height: 20px;
}

.deleteButton {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}
.deleteButton:hover {
  background-color: #c82333;
}
#taskList .completed {
  background-color: #d4edda;
  text-decoration: none;
  color: #155724;
}
</style>
