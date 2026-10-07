document.addEventListener('DOMContentLoaded', renderTasks);

function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskList = document.getElementById('taskList');
  const noTasks = document.getElementById('noTasks');

  taskList.innerHTML = '';

  if (tasks.length === 0) {
    noTasks.style.display = 'block';
    return;
  }
  
  noTasks.style.display = 'none';

  // Sort tasks: pending first, then by due date
  tasks.sort((a, b) => {
    if (a.completed === b.completed) {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return a.completed ? 1 : -1;
  });

  tasks.forEach(task => {
    const div = document.createElement('div');
    div.className = `task-item ${task.completed ? 'completed' : ''}`;
    
    div.innerHTML = `
      <div class="task-info">
        <h3>${task.title}</h3>
        <div class="task-meta">
          <span>${task.subject}</span>
          <span>• Due: ${formatDate(task.dueDate)}</span>
          <span class="badge badge-${task.priority}">${task.priority}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="btn btn-sm ${task.completed ? '' : 'btn-success'}" onclick="toggleComplete('${task.id}')">
          ${task.completed ? 'Undo' : 'Complete'}
        </button>
        <button class="btn btn-sm btn-danger" onclick="deleteTask('${task.id}')">Delete</button>
      </div>
    `;
    taskList.appendChild(div);
  });
}

function toggleComplete(id) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskIndex = tasks.findIndex(t => String(t.id) === String(id));
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

function deleteTask(id) {
  if(confirm("Are you sure you want to delete this task?")) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => String(t.id) !== String(id));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

function formatDate(dateString) {
  if (!dateString) return 'No due date';
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
