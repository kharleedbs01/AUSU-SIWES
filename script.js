// Greet button
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greetMessage").textContent = "Welcome to My Restaurant! 🎉 Enjoy your visit!";
});

// Optional: display current date
const dateEl = document.createElement("p");
const today = new Date();
dateEl.textContent = `Today's Date: ${today.toDateString()}`;
dateEl.style.marginTop = "10px";
document.querySelector("main").appendChild(dateEl);
