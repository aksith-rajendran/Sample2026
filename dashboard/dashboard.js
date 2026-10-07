document.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  document.getElementById('totalTasks').textContent = total;
  document.getElementById('completedTasks').textContent = completed;
  document.getElementById('pendingTasks').textContent = pending;

  const upcomingList = document.getElementById('upcomingList');
  const pendingTasks = tasks.filter(t => !t.completed).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)).slice(0, 5);

  if (pendingTasks.length === 0) {
    upcomingList.innerHTML = '<li class="mini-task-item" style="color: var(--text-secondary);">No upcoming tasks. You are all caught up!</li>';
  } else {
    upcomingList.innerHTML = pendingTasks.map(task => `
      <li class="mini-task-item">
        <div>
          <strong>${task.title}</strong>
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem;">${task.subject} • Priority: ${task.priority}</div>
        </div>
        <div style="color: ${isOverdue(task.dueDate) ? 'var(--danger)' : 'var(--text-secondary)'};">
          ${formatDate(task.dueDate)}
        </div>
      </li>
    `).join('');
  }
});

function isOverdue(dateString) {
  if (!dateString) return false;
  return new Date(dateString) < new Date(new Date().toDateString());
}

function formatDate(dateString) {
  if (!dateString) return 'No due date';
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
