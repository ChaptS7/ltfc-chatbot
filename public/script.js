async function sendMessage() {

  const input = document.getElementById("userInput");
  const message = input.value;

  if (!message) return;

  const chatbox = document.getElementById("chatbox");

  chatbox.innerHTML += "<p><b>You:</b> " + message + "</p>";

  input.value = "";

  const response = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: message
    })
  });

  const data = await response.json();

  chatbox.innerHTML += "<p><b>Bot:</b> " + data.reply + "</p>";
}
