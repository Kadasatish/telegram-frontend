const dot = document.getElementById("dot");
let lastProcessed = "";

async function updateDot() {
  try {
    const res = await fetch("https://telegram-backend-q7on.onrender.com/messages");
    const data = await res.json();
    const last = data[data.length - 1]?.trim();

    // Check only if it's ₹5 and not already processed
    if (last === "₹5" && last !== lastProcessed) {
      lastProcessed = last;

      // Turn white
      dot.classList.add("on");
      dot.classList.remove("off");

      // After 5 seconds, turn back to black
      setTimeout(() => {
        dot.classList.add("off");
        dot.classList.remove("on");
      }, 5000);
    }

  } catch (e) {
    console.error("Error fetching messages:", e);
  }
}

setInterval(updateDot, 2000);
