function sendMessage(){

let input = document.getElementById("userInput")
let message = input.value

if(message === "") return

let chatbox = document.getElementById("chatbox")

let user = document.createElement("div")
user.className = "user-message"
user.innerText = message

chatbox.appendChild(user)

input.value = ""

let bot = document.createElement("div")
bot.className = "bot-message"
bot.innerText = "Thinking..."

chatbox.appendChild(bot)

fetch("/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message:message})
})
.then(res=>res.json())
.then(data=>{
bot.innerText = data.reply
})

}

function askExample(text){

document.getElementById("userInput").value = text
sendMessage()

}