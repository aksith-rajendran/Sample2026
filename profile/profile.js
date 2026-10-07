function clearData() {
  const confirmed = confirm("WARNING: This will permanently delete all your tasks. Are you sure you want to proceed?");
  if (confirmed) {
    localStorage.removeItem('tasks');
    alert("All task data has been cleared.");
    window.location.reload();
  }
}
