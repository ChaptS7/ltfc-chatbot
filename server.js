require("dotenv").config()

const express = require("express")
const cors = require("cors")
const { GoogleGenerativeAI } = require("@google/generative-ai")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

app.post("/chat", async (req,res)=>{

try{

const userMessage = req.body.message

const model = genAI.getGenerativeModel({
model:"gemini-2.5-flash"
})

const result = await model.generateContent(userMessage)

const reply = result.response.text()

res.json({reply})

}catch(error){

console.log(error)
res.json({reply:"Error generating response"})

}

})

app.listen(3000,()=>{

console.log("Server running on http://localhost:3000")
})