const express=require("express")
const app=express();
const env=require("dotenv").config();
const PORT=process.env.PORT || 8080;

app.use(("/"),(req,res)=>{
res.json({message:"hello world"})
})


app.listen(PORT,()=>{
console.log(`Server is running on PORT ${PORT}`)
})