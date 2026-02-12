# Task Manager App

[Live Demo](https://ridaaayaz.github.io/TaskManagerApp/)

---

## Overview
The Task Manager App is a web-based productivity tool that helps users manage, track, and analyze their daily tasks. It allows users to create, edit, and mark tasks as complete, while providing dynamic analytics and charts to visualize progress. The app is fully responsive and designed for seamless usage across different devices.

---

## Features
- Add, edit, and delete tasks dynamically
- Mark tasks as Pending or Completed
- Highlight high-priority and overdue tasks
- Real-time statistics: Completion rate, pending tasks, priority distribution, monthly trends
- Interactive charts using Chart.js
- Calendar view showing tasks by due date
- Search and filter tasks by title, description, priority, or status
- Responsive layout for mobile and desktop screens

---

## Technology Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Charts & Analytics:** Chart.js
- **Storage:** LocalStorage for persistent task data
- **Version Control:** GitHub

---

## Challenges Faced and Solutions
- **Persistent Data:** Used `localStorage` to save tasks across sessions.  
- **Dynamic Task Cards:** Carefully manipulated the DOM to render cards with proper styles for overdue, high-priority, or completed tasks.  
- **Real-Time Analytics:** Separated logic for statistics and charts to update metrics whenever tasks changed.  
- **Responsiveness:** Used CSS Grid, flexible widths, and media queries to ensure a consistent layout on different screen sizes.  
- **Filters & Search Sync:** Implemented live updates of both task list and analytics charts based on filters and search input.

---

## What I Learned
- Structuring pages with **HTML** and using semantic elements
- Designing responsive layouts, cards, charts, and hover animations with **CSS**
- Implementing interactivity and dynamic content rendering with **JavaScript**
- Managing persistent data using `localStorage`
- Updating analytics and charts in real-time
- Combining HTML, CSS, and JS to build a fully interactive web application

---


## Future Improvements
- Add user authentication for multiple users
- Sync tasks across devices using a backend database
- Export tasks and analytics as reports (CSV/PDF)
- Enhance UI with more interactive charts and themes
- Implement notifications for upcoming or overdue tasks

---

## Installation / Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/ridaaayaz/TaskManagerApp.git
2. Open `index.html` or `dashboard.html` in your browser.
3. Start adding tasks and see analytics update in real-time.

## Author
Rida Ayaz  
[GitHub](https://github.com/ridaaayaz)  
[Live Demo](https://ridaaayaz.github.io/TaskManagerApp/)
