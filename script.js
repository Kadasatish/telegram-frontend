const dot = document.getElementById("dot");
let isActive = false;

async function updateDot() {
  try {
    const res = await fetch("https://telegram-backend-q7on.onrender.com/messages");
    const data = await res.json();
    const last = data[data.length - 1]?.trim();

    // If already active (in white state), skip
    if (isActive) return;

    if (last === "₹5") {
      isActive = true;

      // Change to white
      dot.classList.add("on");
      dot.classList.remove("off");

      // Wait 5 seconds, then switch back to black
      setTimeout(() => {
        dot.classList.add("off");
        dot.classList.remove("on");
        isActive = false;
      }, 5000);
    }
  } catch (e) {
    console.error("Error fetching messages:", e);
  }
}

// Run every 2 seconds
setInterval(updateDot, 2000);
