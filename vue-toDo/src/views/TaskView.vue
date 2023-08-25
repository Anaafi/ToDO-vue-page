<script setup>
import { ref } from 'vue';
import { useCounterStore } from "../stores/counter"
  import InputComponent from '../components/InputComponent.vue';

  /*const todoList = ref([]);

  const newTask = ref("");*/

  //const {todoList, addTask, deleteTask, newTask} = useCounterStore();
 const counter = useCounterStore();
 /* function addTask(){
    todoList.value.push({
        task: newTask.value,
    });
    console.log(newTask.value)
    newTask.value = "";
  }*/
  /*function addTask(){
  addTodoItem({ task: newTask.value });
  newTask.value = "";
}*/

  /*function deleteTask(index){
    todoList.value.splice(index, 1);
    //removeTodoItem(index);
  }*/
  

</script>

<template>
  <main>
    <InputComponent />
    <div class="taskBox">
        <div class="add">
            <input v-model="counter.newTask" type="text" placeholder="Add task...">
        <button class="save-btn" @click="counter.addTask">SAVE</button>
        </div>
        <div class="todo" v-for="(todo, index) in counter.todoList" :key="todo.task">
            <p>{{ todo.task }}</p>
            <div class="btn">
                <button @click="counter.editTask(index)">Edit</button>
                <button @click="counter.deleteTask(index)">Delete</button>
            </div>
            
        </div>
        
    </div>
    
  </main>
</template>

<style scoped>
.taskBox{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 37px 400px 0px 399px;
}
.add{
    display: flex;
    background: #323be0;
    align-items: center;
    justify-content: space-between;
    
}
.todo{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background: #323be0;
    align-items: center;
    
}
.todo p{
    font-size: 20px;
    color: #fff;
}
.btn{
    display: flex;
    
}
input{
    padding: 10px;
    font-size: 18px;
    width: 100%;
}
.save-btn{
    padding: 10px;
    font-size: 18px;
}
.btn button{
    padding: 10px 10px;
}
button{
    color: #fff;
}
</style>
