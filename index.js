//-------- your direct path goes here (in testpath variable as a string)

const testpath="C:/Users/hp/Desktop";

//-------- importing Node.js file system

import fs from "fs"
import path from "path"

console.log("[▪] >>> file");
console.log("[▣ ] >>> folder");


function c(tpath){
    var display=[];

//--------fs. readdirSync() method is used to synchronously read the contents of a given directory

var files =fs.readdirSync(tpath);
for( var x in files){

    var next= path.join(tpath,files[x])

//--------fs.statSync() method is used to return details about the given file path

    if(fs.statSync(next).isDirectory())
    {
        let base=path.basename(next);
   
        let folder={};
        folder[` [▣ ] ☛  ${base}`]=c(next);
         display=[...display,JSON.stringify({folder:folder}).replace(/\\/g, '') ];
        
    }
    else
    {
        display.push(JSON.stringify({file:" [▪] ☛  "+path.basename(next)}).replace(/\\/g, ''))
    }
}
return display;
}
// ------- the output is diplayed as array of nested objects
console.log(c(testpath));

console.log("[▪] >>> file");
console.log("[▣ ] >>> folder");

