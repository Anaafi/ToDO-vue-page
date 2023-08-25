import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  
  const todoList = ref([]);
  const newTask = ref("");

  const editedTask = ref(null);

  function addTask(){
    //console.log("new task");
    if(newTask.value.length === 0) {
      return;
    }

    if(editedTask.value === null){
      todoList.value.push({
      task: newTask.value,
      
    });
    } else{
      todoList.value[editedTask.value].task = newTask.value;
      editedTask.value = null;
      }
    
    newTask.value = "";
  }


  function deleteTask(index){
    todoList.value.splice(index, 1);
    //removeTodoItem(index);
  }

 function editTask(index){
    newTask.value = todoList.value[index].task;
    editedTask.value = index;
  }
  return { addTask, todoList, newTask, deleteTask, editTask, editedTask}
})


