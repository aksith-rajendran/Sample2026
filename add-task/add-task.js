document.getElementById('addTaskForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const taskTitle = document.getElementById('taskTitle').value.trim();
  const subject = document.getElementById('taskSubject').value.trim();
  const dueDate = document.getElementById('taskDate').value;
  const priority = document.getElementById('taskPriority').value;

  if (!taskTitle || !subject || !dueDate || !priority) {
    if(!taskTitle) {
      document.getElementById('titleError').style.display = 'block';
    }
    return;
  }
  document.getElementById('titleError').style.display = 'none';

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  const newTask = {
    id: Date.now(),
    title: taskTitle,
    subject: subject,
    dueDate: dueDate,
    priority: priority,
    completed: false
  };

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Show success and reset form
  const alert = document.getElementById('successAlert');
  alert.style.display = 'block';
  this.reset();
  
  setTimeout(() => {
    alert.style.display = 'none';
  }, 3000);
});
