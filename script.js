const dot = document.getElementById("dot");

function fetchMessages() {
  fetch("https://telegram-backend-q7on.onrender.com/messages")
    .then((res) => res.json())
    .then((data) => {
      const lastMessage = data[data.length - 1];
      if (lastMessage === "₹5") {
        makeDotWhiteTemporarily();
      }
    })
    .catch((err) => console.error("Error fetching messages:", err));
}

function makeDotWhiteTemporarily() {
  // Dot ని white గా మారించు
  dot.classList.add("white-dot");

  // 5 seconds తర్వాత మళ్ళీ black dot కి మార్చు
  setTimeout(() => {
    dot.classList.remove("white-dot");
  }, 5000);
}

// ప్రతి 2 seconds కి backend నుండి messages తెచ్చుకుంటుంది
setInterval(fetchMessages, 2000);
