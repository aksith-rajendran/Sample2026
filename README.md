# Student Task Manager

A unified workspace for students to manage assignments, exams, and projects efficiently without missing deadlines.

## Project Structure

```text
Student-Task-Manager/
│
├── index.html            (Landing page)
├── dashboard/            (Dashboard view with stats)
├── add-task/             (Add task form)
├── tasks/                (Task list view)
├── profile/              (Profile settings)
├── assets/
│   └── style.css         (Shared CSS)
└── README.md
```

## Features

- **Home**: Quick navigation to all parts of the app.
- **Dashboard**: Displays total, completed, and pending tasks, along with upcoming deadlines.
- **Add Task**: Form to create new tasks and save them locally.
- **Tasks**: List of all tasks with priority badges, due dates. Supports marking complete and deleting.
- **Profile**: Settings and ability to clear all task data.

## Technologies Used

- HTML5
- CSS3 (Custom properties, Flexbox, CSS Grid)
- Vanilla JavaScript (ES6, LocalStorage)

## Setup

No backend is required. Simply open `index.html` in your browser. All data is persisted securely in your browser's local storage.
