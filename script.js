
let balance = 0;

const tasks = [
  { name: "Demo Survey", reward: 10 },
  { name: "Simple Quiz", reward: 5 },
  { name: "Daily Check-in", reward: 2 }
];

function completeTask(index) {
  const task = tasks[index];

  if (!task) return;

  balance += task.reward;

  document.getElementById("balance").textContent =
    "₹" + balance.toFixed(2);

  alert("Demo reward added: ₹" + task.reward);
}

function adminLogin() {
  alert("Admin dashboard is under development.");
}
