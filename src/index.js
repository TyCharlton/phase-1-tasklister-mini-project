
const h1 = document.querySelector('h1')

console.log(h1)

function changeColor() {
    h1.style.color = "Green";
}

h1.addEventListener('mouseover', changeColor)

h1.addEventListener('mouseout', () => h1.style.color = "black")

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#create-task-form');
  const tasksList = document.querySelector('#tasks');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    
    const taskDescription = document.querySelector('#new-task-description').value;

    
    if (taskDescription.trim() !== '') {
    
      const newTask = document.createElement('li');
      newTask.textContent = taskDescription;

      tasksList.appendChild(newTask);

      console.log('New Task:', taskDescription);

      document.querySelector('#new-task-description').value = '';
      console.log('')
    }



  });
});


