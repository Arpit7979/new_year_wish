import express from "express";
import bodyParser from "body-parser";



const app = express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("first.ejs");
});

app.post("/second",(req,res)=>{
    res.render("second.ejs",{output:(req.body["name"]).toUpperCase()});
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});