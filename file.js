const { log } = require("console");
const fs = require("fs");


// fs.writeFileSync("./test.txt", "Sayonara tata Node");


fs.writeFile("./test2Async", "testing async file creation", (err)=> console.log(err));

const result = fs.readFileSync("./contact.txt","utf-8");
console.log(result);


fs.readFile("./contact.txt","utf-8", (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Async call result", result);
})


fs.appendFileSync("./test.txt", `test append\n`);

fs.cpSync("./test.txt","./copyOftest.txt");

fs.unlinkSync("./test3Async");

