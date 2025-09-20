// --- Global Scope Variable ---
let counter = 0;

// --- Part 2: Functions ---
function incrementCounter(amount) {
  // Local scope variable
  let newValue = counter + amount;
  counter = newValue; // update global
  document.getElementById("counter").textContent = counter;
  return newValue; // return value for reusability
}

// Example of scope: this won't affect the global counter
function testScope() {
  let counter = 999; // local scope only
  console.log("Inside function, counter is:", counter);
}
testScope(); // demonstrates local scope

// --- Part 3: Trigger CSS Animations ---
document.getElementById("startBoxAnim").addEventListener("click", () => {
  document.getElementById("animateBox").classList.toggle("animate");
});

// Modal logic
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
