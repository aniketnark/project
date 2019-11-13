const express=require("express");
const mysql=require("mysql");
const app=express();

app.get("/",function(req,res)
{
    console.log("fetcha data");
    res.send("fetch data");
});

app.post("/",function(req,res)
{
    console.log("insert data");
    res.send("insert data");
});

