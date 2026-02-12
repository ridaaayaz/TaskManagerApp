
window.addEventListener("load", function () {
    this.document.querySelectorAll(".appear").forEach((el, i) => {
        this.setTimeout(() => el.classList.add("show"), i * 120);
    })
})
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let pendingTasks = tasks.filter(t => t.status === "Pending");

let completed = count("Completed");
document.getElementById("Completed").textContent = completed;


let total = tasks.reduce((acc, item) => item ? acc + 1 : acc, 0);
document.getElementById("Total").textContent = total;

let pending = count("Pending");
const percent =  Math.round((completed / total) * 10000) / 100;
document.getElementById("rate").textContent = percent + "%";
const today = new Date();
today.setHours(0, 0, 0, 0);

let urgent = pendingTasks.reduce((acc, task) => {
    return task.priority == "High" ? acc + 1 : acc ;
}, 0);

let overdue = tasks.reduce((acc, task) => {
    return isOverdue(task) ? acc + 1 : acc;
}, 0);

document.getElementById("urgent").textContent = urgent;


function isOverdue(task) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0);

    return taskDate < today && task.status === "Pending";
}

function count(status) {
    let count = tasks.reduce((acc, item) => {
        return item.status === status ? acc + 1 : acc;
    }, 0)

    return count;
}

const pieCtx = document.getElementById("piechart").getContext("2d");

const taskPieChart = new Chart(pieCtx, {
    type: "pie",
    data: {
        labels: ["Completed", "Pending"],
        datasets: [{
            data: [
                count("Completed"), 
                count("Pending")    
            ],
            backgroundColor: [
                "#22c55e", 
                "#3b82f6"  
            ]
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});


const ctx = document.getElementById("barchart").getContext("2d");

let high = tasks.reduce((acc, task) => {
    return task.priority == "High" ? acc + 1 : acc ;
}, 0);

let med = tasks.reduce((acc, task) => {
    return task.priority == "Medium" ? acc + 1 : acc ;
}, 0);

let low = tasks.reduce((acc, task) => {
    return task.priority == "Low" ? acc + 1 : acc ;
}, 0);
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["High", "Medium", "Low"],
        datasets: [{
            label: 'Tasks',
            data: [high, med, low],
            backgroundColor: ['#f17b7b', '#efcb78', '#7de186']
        }]
    },
    options: {
        indexAxis: 'y', 
        scales: {
            x: { beginAtZero: true }
        },
        plugins: {
            legend: { display: false }
        }
    }
});


const statusCtx = document.getElementById("statusChart").getContext("2d");

new Chart(statusCtx, {
    type: 'bar',
    data: {
        labels: ["Completed", "Pending", "Overdue"],
        datasets: [{
            label: "Tasks",
            data: [
                count("Completed"),
                count("Pending"),
                overdue
            ]
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        },
        plugins: {
            legend: { display: false }
        }
    }
});

const monthlyCtx = document.getElementById("monthlyChart").getContext("2d");

let months = Array(12).fill(0);

tasks.forEach(task => {
    if (!task.createdAt) return;

    const date = new Date(task.createdAt);
    const month = date.getMonth();
    months[month]++;
});

new Chart(monthlyCtx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Tasks Created",
            data: months
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        },
        plugins: {
            legend: { display: false }
        }
    }
});
