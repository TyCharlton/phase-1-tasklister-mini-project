/* document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  const input = document.querySelector("#new-task-description")
  const list_el = document.querySelector("#tasks")


  form.addEventListener('sumbit', (e) => {
      e.preventDefault();

      const task = input.ariaValueMax;

      if (!task) {
        alert("Please fill out the task");
        return;
      }

      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_content_el = document.createElement("div");
      task_el.classList.add("content");
      task_content_el.innerText = task;

      task.length.appendChild(task_content_el);

      list_el.appendChild(task_el)

       
  })

   

})
*/

const h1 = document.querySelector('h1')

console.log(h1)

function changeColor() {
    h1.style.color = "Green";
}

h1.addEventListener('mouseover', changeColor)

h1.addEventListener('mouseout', () => h1.style.color = "black")

document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('create-task-form');
  const tasksList = document.getElementById('tasks');
  

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    
    const taskDescription = document.getElementById('new-task-description').value;

    
    if (taskDescription.trim() !== '') {
    
      const newTask = document.createElement('li');
      newTask.textContent = taskDescription;

      tasksList.appendChild(newTask);

      console.log('New Task:', taskDescription);

      document.getElementById('new-task-description').value = '';
      console.log('')
    }



  });
});


