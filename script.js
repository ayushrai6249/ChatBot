// Function to send message when Enter key is pressed
document.getElementById("messageInput").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) { // 13 is the key code for Enter
    sendMessage();
  }
});

// Function to send message when Send button is clicked
function sendMessage() {
  var messageInput = document.getElementById("messageInput");
  var message = messageInput.value;
  
  if (message.trim() !== "") {
    var messageDisplay = document.getElementById("messageDisplay");
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = message;
    messageDisplay.appendChild(userMessage);
    
    // Send the additional message
    var botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.textContent = "We will cover you soon";
    messageDisplay.appendChild(botMessage);
    
    // Clear input after sending message
    messageInput.value = "";
  } else {
    alert("Please enter a message.");
  }
}
