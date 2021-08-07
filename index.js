import express from "express";

const PORT = process.env.PORT || 5000;

const app=express();

app.use(express.json());
// app.use(cors());
app.listen(PORT,console.log("server started"));

//-------- your direct path goes here (in testpath variable as a string)

const testpath="C:/Users/hp/Desktop/System design";

//-------- importing Node.js file system

import fs from "fs"
import path from "path"

console.log("[▪] >>> file");
console.log("[▣ ] >>> folder");

// -----------uncomment the below code to call the recursive  function to display the directory-------

// function c(tpath){
//     var display=[];

// //--------fs. readdirSync() method is used to synchronously read the contents of a given directory

// var files =fs.readdirSync(tpath);
// for( var x in files){

//     var next= path.join(tpath,files[x])

// //--------fs.statSync() method is used to return details about the given file path

//     if(fs.statSync(next).isDirectory())
//     {
//         let base=path.basename(next);
   
//         let folder={};
//         folder[` [▣ ] ☛  ${base}`]=c(next);
//          display=[...display,JSON.stringify({folder:folder}).replace(/\\/g, '') ];
        
//     }
//     else
//     {
//         display.push(JSON.stringify({file:" [▪] ☛  "+path.basename(next)}).replace(/\\/g, ''))
//     }
// }
// return display;
// }

//your return value of  function call is sent within the below reponse to GET from browser

// app.get("/",(req,res)=>{res.send({display:c(testpath)})});

// // ------- the output is diplayed as array of nested objects
// console.log(c(testpath));



// -------sample display is shown below ---------

let sampleArr=[
    '{"file":" [▪] ☛  4+1.PNG"}',
    '{"file":" [▪] ☛  monolith vs MSA.PNG"}',
    '{"folder":{" [▣ ] ☛  test folder":["{"file":" [▪] ☛  ddd.txt"}","{"folder":{" [▣ ] ☛  demo folder":["{"file":" [▪] ☛  context.PNG"}"]}}","{"folder":{" [▣ ] ☛  demo2 folder":["{"file":" [▪] ☛  testtext.txt"}"]}}"]}}'
  ]

app.get("/",(req,res)=>{res.send({message:"sample display",display:sampleArr})});





console.log("[▪] >>> file");
console.log("[▣ ] >>> folder");

