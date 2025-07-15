const dot = document.getElementById("dot");

async function updateDot() {
  try {
    const res = await fetch("https://telegram-backend-q7on.onrender.com/messages");
    const data = await res.json();
    const last = data[data.length - 1]?.toLowerCase();

    if (last === "on") {
      dot.classList.add("on");
      dot.classList.remove("off");
    } else if (last === "off") {
      dot.classList.add("off");
      dot.classList.remove("on");
    }
  } catch (e) {
    console.error("Error fetching messages:", e);
  }
}

setInterval(updateDot, 2000);
